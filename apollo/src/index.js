const FEED_QUERY = gql`
  query Feed($type: FeedType!, $offset: Int, $limit: Int) {
    currentUser {
      login
    }
    feed(type: $type, offset: $offset, limit: $limit) {
      id
      # ...
    }
  }
`

const FeedData = ({ match }) => {
  const { data, fetchMore } = useQuery(
    FEED_QUERY,
    {
      variables: {
        type: match.params.type.toUpperCase() || "TOP",
        offset: 0,
        limit: 10
      },
      fetchPolicy: "cache-and-network"
    }
  )

  return (
    <Feed
      entries={data.feed || []}
      onLoadMore={() => fetchMore({
        variables: {
          offset: data.feed.length
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev
          return Object.assign({}, prev, {
            feed: [...prev.feed, ...fetchMoreResult.feed]
          })
        }
      })}
    />
  )
}

const MORE_COMMENTS_QUERY = gql`
  query MoreComments($cursor: String) {
    moreComments(cursor: $cursor) {
      cursor
      comments {
        author
        text
      }
    }
  }
`
const CommentsWithData = () => {
  const { data: { comments, cursor }, loading, fetchMore } = useQuery(
    MORE_COMMENTS_QUERY
  )

  return (
    <Comment
      entires={comments || []}
      onLoadMore={() => fetchMore({
        query: MORE_COMMENTS_QUERY,
        variables: { cursor: cursor },
        updateQuery: (previousResult, { fetchMoreResult }) => { 
          const previousEntry = previousResult.previousEntry
          const newComments = fetchMoreResult.moreComments.comments
          const newCursor = fetchMoreResult.moreComments.cursor

          return {
            cursor: newCursor,
            entry: {
              comments: [...newComments, ...previousEntry.comments]
            },
            __typename: previousEntry.__typename
          }
        }
      })}
    />
  )
}
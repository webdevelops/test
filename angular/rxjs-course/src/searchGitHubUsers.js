const { fromEvent, EMPTY } = require("rxjs");
const { ajax } = require("rxjs/ajax");
const { map, debounceTime, distinctUntilChanged, switchMap, mergeMap, tap, catchError, filter } = require("rxjs/operators");

const url = 'https://api.github.com/search/users?q=';
const search = document.getElementById('search');
const result = document.getElementById('result');

const stream$ = fromEvent(search, 'input');

stream$
  .pipe(
    map(e => e.target.value),
    debounceTime(1000),
    distinctUntilChanged(),
    tap(() => result.innerHTML = ''),
    filter(v => v.trim()),
    switchMap(v => ajax.getJSON(url + v).pipe(
      // catchError(err => EMPTY)
    )),
    map(v => v.items),
    mergeMap(item => item)
  )
  .subscribe(user => {
  console.log("user", user)
    const html = document.createElement('div');
    
    html.innerHTML = `
    <div class="card">
      <div class="card-image">
        <img src="${user.avatar_url}" alt="">
        <span class="card-title">USER NAME</span>
      </div>
      <div class="card-action">
        <a href="${user.html_url}" target="_blank">Open GitHUb</a>
      </div>
    </div>
  `
    result.insertAdjacentElement('beforeend', html)
  });

  // webdevelops
  // vladilen
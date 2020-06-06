enum Membership {
  Simple,
  Standart,
  Premium
};

const membership = Membership.Standart;
const membershipReverse = Membership[2];

console.log("membership", membership);
console.log("membershipReverse", membershipReverse);

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
};

const social = SocialMedia.FACEBOOK;

console.log(social);
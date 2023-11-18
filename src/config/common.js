// common configuration in all enviroments
const authentication = {
  tokenKey: "b0a74aa9ef623381e32f9a4579655ad8458f2124b25d704b3ab7aaba96dd8aca",
  refreshTokenKey:
    "666da5bdcf537baf674db0727e0084318b39a7d164034d796c4b917f8d2d3197",
  salt: "f8eae0e5536f33650bc5",
  authenticationTokenExpiresTimeInMinute: 1440,
  authenticationTokenExpiresTimeInMilisecond: 86400000,
  applicationActiveTimeInMinutes: 5,
  applicationActiveTimeInMiliSeconds: 300000,
}

const otpCode = {
  minimum: 10000,
  maximum: 100000,
  tokenKey: "f4ef94e8d97efd031f49470971b5d01aad4946c4ea5fdd5713c396f977293248",
}

const cloud = {
  secretKey: "214c0c80b812f5f915dce03c635e85eb9406c9f4c594d9d343da3996085942f4",
  accessKey: "27c2f3e2-5c70-4323-ae89-e13e04f839c4",
  endPointUrl: "https://s3.ir-thr-at1.arvanstorage.com",
  bucket: {
    playerFacePicture: "football-manager-player-face-picture",
    userProfilePicture: "football-manager-user-profile-picture",
    groupAndChennelProfilePicture:
      "football-manager-group-and-channel-profile-picture",
    footballManagerGroupPostPicture: "football-manager-group-post-picture",
  },
  expiresTime: 240, //second
  maximumFileSize: 128000,
}

module.exports = {
  otpCode,
  cloud,
  authentication,
  invalidPasswordOrCode,
}

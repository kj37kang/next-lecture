import { profile } from "../../_data/profile";

export async function PUT(request) {
  if(!profile.following) {
    profile.following = true;
    profile.followerCount += 1;
  }

  return Response.json({
    following: profile.following,
    followerCount: profile.followerCount
  });
}

export async function DELETE(request) {
  if(profile.following) {
    profile.following = false;
    profile.followerCount -= 1;
  }

  return Response.json({
    following: profile.following,
    followerCount: profile.followerCount
  });
}
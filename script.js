function createPost(profilePic, creator, lastPosted, image, caption) {
    this.root = $("<div class='post'></div>");
    this.postHeader = $("<div class='post-header'></div>");
    this.postContent = $("<div class='post-content'></div>");
    this.interactions = $("<div class='interactions'><div class='main-interactions'><i class='fa fa-heart'></i><i class='fa fa-comment'></i><i class='fa fa-paper-plane'></i></div><i class='fa fa-bookmark'></i></div>");
    this.caption = $("<div class='caption'></div>");
    this.postDivider = $("<div class='post-divider'></div>");

    // Post header stuff

    this.details = $("<div class='details'></div>");
    this.profilePic = $("<div class='profile-pic'></div>");
    this.creator = $("<div class='creator'><b>" + creator + "</b></div>");
    this.divider = $("<span class='divider'>|</span>");
    this.lastPosted = $("<div class='last-posted'>" + lastPosted + "m</div>");
    this.dots = $("<div class='dots'>...</div>");

    // Profile picture stuff

    this.profilePic.css("background-image", "url('" + profilePic + "')");

    // Putting details together

    this.details.append(this.profilePic);
    this.details.append(this.creator);
    this.details.append(this.divider);
    this.details.append(this.lastPosted);

    // Putting post header together

    this.postHeader.append(this.details);
    this.postHeader.append(this.dots);

    // Post content stuff

    this.image = $("<img src='" + image + "'/>");

    // Putting post content together

    this.postContent.append(this.image);

    // Caption stuff

    this.comment = $("<span class='comment'>" + caption + "</span>");
    this.commentCreator = $("<div class='creator'><b>" + creator + "</b></div>");
    

    // Putting caption together

    this.caption.append(this.commentCreator);
    this.caption.append(this.comment);

    // Appending to our post body

    this.root.append(this.postHeader);
    this.root.append(this.postContent);
    this.root.append(this.interactions);
    this.root.append(this.caption);
    this.root.append(this.postDivider);

    // Appending to our post container

    $(".post-container").append(this.root);
}

function getRandomImage(imgArray) {
    var image = imgArray[Math.floor(Math.random() * imgArray.length)];
    return image;
}

$(document).ready(function () {
    /*createPost(
        "profilePic",
        "creator",
        "lastPosted",
        "image",
        "caption");*/

    createPost(
        "https://i.insider.com/5a2589ab3339b027008b4715?width=600&format=jpeg&auto=webp",
        "hiker_man111",
        "15",
        getRandomImage(mountain_array),
        "Beautiful view after todays hike!");

    createPost(
        "https://m.media-amazon.com/images/I/81vgRR8o4vL._AC_UY1000_.jpg",
        "ghostface_fan77",
        "22",
        getRandomImage(scary_array),
        "Boo! Haha did I scare you?");

    createPost(
        "https://media.gettyimages.com/id/175440771/photo/handsome-young-man-gesturing-thumbs-up-isolated.jpg?s=612x612&w=gi&k=20&c=rNDrj73bXAla605kVUdLvr2OkDNYhx8ITsk585iaeyI=",
        "steven_grey101",
        "36",
        getRandomImage(kitten_array),
        "I sure do love cute kittens :D");

    createPost(
        "https://m.media-amazon.com/images/I/81Ski+fm4BL.png",
        "stanley_meyers22",
        "58",
        getRandomImage(double_rainbow),
        "Wow! Can't believe I was lucky enough to catch this double rainbow!");

    createPost(
        "https://m.media-amazon.com/images/I/81Ski+fm4BL.png",
        "puppylover207",
        "2",
        getRandomImage(puppy_array),
        "I got a new puppy today! :)");

    createPost(
        "https://cdn.motor1.com/images/mgl/KjMYQ/s3/bugatti-divo-exterior.webp",
        "fastcar808",
        "7",
        getRandomImage(car_accidents),
        "Got into a car accident today :(");

    createPost(
        "https://media-be.chewy.com/wp-content/uploads/2022/09/27095535/cute-dogs-pembroke-welsh-corgi.jpg",
        "James",
        "20",
        getRandomImage(house_fires),
        "My house is on fire! :(");
});


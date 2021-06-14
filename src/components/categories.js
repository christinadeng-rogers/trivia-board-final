// Use different image for different categories
const Science = "https://i.pinimg.com/originals/a0/4e/e7/a04ee737908a109a78bd85240ea4ad33.png";
const Sport = "https://cdn.dribbble.com/users/3873964/screenshots/8056429/icons8_ouch_sports_4x.png";
const Music = "https://media.istockphoto.com/vectors/sketch-musical-sound-wave-with-music-notes-hand-drawn-vector-vector-id912180474?k=6&m=912180474&s=612x612&w=0&h=uwvWtFyv4a413mjrUB-x_QxlViAHO5RhFlWV6xIRvhA=";
const Nature = "https://i.pinimg.com/originals/af/4c/57/af4c571f547a74ae7a0dbda30a79c509.jpg";

const images = { Science, Sport, Music, Nature };

function getImageByKey (key) {
    return images[key];
}

export default getImageByKey;
const PicRandomProfiel = [
`https://res.cloudinary.com/demo/image/facebook/65646572251.jpg`,
 `https://us.123rf.com/450wm/lacheev/lacheev2109/lacheev210900016/173818773-portrait-of-happy-clever-intelligent-young-man-in-glasses-looking-at-camera-and-smiling-headshot-of.jpg?ver=6`,
  `https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=`,
   `https://www.shutterstock.com/image-photo/headshot-portrait-smiling-african-american-260nw-1667439898.jpg`, 
   `https://image.shutterstock.com/mosaic_250/2780032/1854697390/stock-photo-head-shot-young-attractive-businessman-in-glasses-standing-in-modern-office-pose-for-camera-1854697390.jpg`, 
   `https://www.shutterstock.com/image-photo/closeup-happy-smiling-successful-40yearold-260nw-1790423123.jpg`, 
   `https://thumbs.dreamstime.com/z/young-professional-woman-15915020.jpg`, 
   `https://www.shreebalajihospital.com/assets/img/dr-pro/demo.jpg`,
    `https://t4.ftcdn.net/jpg/01/87/10/43/360_F_187104355_hs9wOORDzl6lVJ12EMhIL8AZe0YaoLYL.jpg`
];


module.exports = () => {
    return PicRandomProfiel[Math.floor(Math.random() * PicRandomProfiel.length)]
};
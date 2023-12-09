window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
   // Create a VRView instance
  var vrView = new VRView.Player('#vrview', {
    image: 'https://snworksceo.imgix.net/pri/a95fa884-a830-4166-b17e-3d4547037a6c.sized-1000x1000.jpg?',
    width: '100%', 
    height: '100%'
  });

//   // Array to store hotspots
//   var hotspots = [
//     { image: 'second-image.jpg', yaw: 180 },
//     { image: 'third-image.jpg', yaw: 270 },
//     { image: 'first-image.jpg', yaw: 90 }
//   ];

//   // Set up hotspots
//   setupHotspots();

//   // Function to set up hotspots based on the current state
//   function setupHotspots() {
//     // Find the current image based on yaw
//     var currentImage = hotspots.find(function(hotspot) {
//       return vrView.getCurrentPosition().yaw === hotspot.yaw;
//     });

//     // Add hotspot for the next image
//     vrView.on('ready', function(){
//         console.log(currentImage.yaw)
//         vrView.addHotspot('next-image-hotspot', {
//             pitch: 0,
//             yaw: currentImage.yaw,
//             radius: 0.05,
//             distance: 2
//           });
//     })
//   }

//   // Handle hotspot click event
//   vrView.on('click', function(event) {
//     if (event.id === 'next-image-hotspot') {
//       // Find the next image based on yaw
//       var nextImage = hotspots.find(function(hotspot) {
//         return event.yaw === hotspot.yaw;
//       });

//       // Switch to the next image
//       vrView.setContent({
//         image: nextImage.image,
//         is_stereo: false
//       });

//       // Set up new hotspots based on the updated state
//       setupHotspots();
//     }
//   });
}
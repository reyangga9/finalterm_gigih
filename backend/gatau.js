// menambahkan video

// router.post("/:id/postVideo", (req, res) => {
//   const video = new Video({
//     judulVideo: req.body.judulVideo,
//     linkyt: req.body.linkyt,
//     img: req.body.img,
//     productId: req.params.id,
//   });

//   try {
//     const videoToSave = video.save();
//     res.status(200).json(videoToSave);
//   } catch (e) {
//     res.status(400).json({ message: e.message });
//   }
// });

// router.put("/update/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updateVideoData = req.body;
//     const options = { new: true };

//     const result = await Video.findByIdAndUpdate(id, updateVideoData, options);
//     res.send(result);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// router.delete("/delete/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const deletedMovieData = await Video.findByIdAndDelete(id);
//     res.send(`Movie With ${deletedMovieData} has been deleted..`);
//   } catch (e) {
//     res.status(400).json({
//       message: error.message,
//     });
//   }
// });

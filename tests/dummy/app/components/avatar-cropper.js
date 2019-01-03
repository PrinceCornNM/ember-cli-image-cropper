import imageCropper from 'ember-cli-image-cropper/components/image-cropper';

export default imageCropper.extend({
  //override default options of cropper
  aspectRatio: 1,
  minCropBoxWidth: 100,
  minCropBoxHeight: 100,
  cropperContainer: '.cropper-container > img',
  previewClass: '.img-preview',
  croppedAvatar: null,
  actions: {
    getCroppedAvatar() {
      let cropper = this.get('cropper'),
          croppedImage = cropper.getCroppedCanvas();
      this.set('croppedAvatar', croppedImage);
    }
  }
});

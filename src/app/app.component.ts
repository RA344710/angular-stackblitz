import { Component } from "@angular/core";
import * as JSZip from 'jszip';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  interests: any = [];
  constructor() {}
  imgList = [
    { imgName: "Image 1", path: "https://i.imgur.com/emBm6jv.jpg" },
    { imgName: "Image 2", path: "https://i.imgur.com/l49aYS3.jpg" },
    { imgName: "Image 3", path: "https://i.imgur.com/a0bs8oJ.jpg" },
    { imgName: "Image 4", path: "https://i.imgur.com/PHYkTp9.jpg" },
    { imgName: "Image 5", path: "https://i.imgur.com/a7fJPfn.jpg" },
    { imgName: "Image 6", path: "https://i.imgur.com/WCzfMMt.jpg" }
  ];

  onCheckboxChagen(event, value) {
    if (event.target.checked) {
      this.interests.push(value.path);
    }
    if (!event.target.checked) {
      let index = this.interests.indexOf(value.path);
      if (index > -1) {
        this.interests.splice(index, 1);
      }
    }
    console.log(this.interests);
  }

  generateZIP() {
    console.log('TEST');
    let zip: JSZip = new JSZip();
    var count = 0;
    var zipFilename = "Pictures.zip";
    this.interests.forEach( (url, i) => {
      let filename = this.interests[i];
      filename = filename.replace(/[\/\*\|\:\<\>\?\"\\]/gi, '').replace("httpsi.imgur.com","");
      console.log(filename);
    });      
  }

}

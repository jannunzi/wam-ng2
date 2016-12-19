import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WidgetImageService {
  constructor(private http:Http) {
  }

  addImageURL(developerId, image) {
    let url = "http://localhost:3000/api/image/" + developerId;
    console.log(url, image);
    return this.http.post(url, image)
      .map(
        (responseData) => {
          return responseData.json();
        }
      );
  }

  uploadImage(image) {

    let url = "http://localhost:3000/api/imageupload";
    let file = image.myFile;
    delete image.myFile;

    return this.makeFileRequest(url, image, file);

  }

  makeFileRequest(url, params, file) {
    return new Promise((resolve, reject) => {
      var formData:any = new FormData();
      var xhr = new XMLHttpRequest();
      formData.append("myFile", file, file.name);
      for (let k in params) {
        formData.append(k, params[k]);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", url, true);
      xhr.send(formData);
    });
  }

  deleteImage(imageId) {

    return this.http.delete("/api/image/" + imageId).toPromise();
  }

  findUserImages(developerId) {

    return this.http.get("/api/image/" + developerId).map(
      (responseData) => {
        return responseData.json();
      }
    )
  }

}

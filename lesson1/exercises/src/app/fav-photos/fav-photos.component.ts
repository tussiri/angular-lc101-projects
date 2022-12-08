import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Places I've Been";
  image1 =
    "https://www.state.gov/wp-content/uploads/2018/11/Tanzania-e1555938157355-2501x1406.jpg";
  image2 =
    "https://media.california.com/media/_versions/lake_tahoe_facts__4088x2731___v1222x580.jpg";
  image3 = "";

  constructor() {}

  ngOnInit() {}
}

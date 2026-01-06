import fs from "fs";
import path from "path";

const photo_url = "https://codeberg.org/HeDeAn/MinaCon_Web/raw/branch/main/src/lib/images/photos/";

const photos_dir= path.resolve('src/lib/images/photos');
const files = fs.readdirSync(photos_dir); 
const photos = files.map(f => `${photo_url}${f}`);
const url_list = JSON.stringify(photos);

fs.writeFileSync(path.resolve('src/lib/data/photo_list.json'), url_list);
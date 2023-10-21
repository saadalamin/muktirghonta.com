/**
 * Copyright 2023 & All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAATvvkM_cYggVuuYU1HjLOr09opsWejTg",
  authDomain: "muktirghonta-dev.firebaseapp.com",
  projectId: "muktirghonta-dev",
  storageBucket: "muktirghonta-dev.appspot.com",
  messagingSenderId: "652899690123",
  appId: "1:652899690123:web:a566a17e3950b302cb968e",
  databaseURL:
    "https://muktirghonta-dev-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const $app = initializeApp(firebaseConfig);
const $database = getDatabase($app);

/*****************************/

async function fetchAllUpdates() {
  await onValue(ref($database, "updates/"), (snapshot) => {
    const updates = snapshot.val();
    console.log(updates);
  });
}

/*****************************/

window.addEventListener("load", () => {
  fetchAllUpdates();
});

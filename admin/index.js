const DatabaseIndexNameTag = document.getElementById("indexesName");
const DatabaseHostNameTag = document.getElementById("hostName");
const DatabaseDBNameTag = document.getElementById("dbName");
const DatabaseSVNameTag = document.getElementById("mysqlVersion");
const DatabaseUserNameTag = document.getElementById("dbUserName");

const ContactLists = document.getElementById("contactLists");
const ContactRecords = document.getElementById("contactRecords");

window.onload = function () {
 axios
  .get("api/index")
  .then(({ data }) => {
   if (data.length > 0) {
    let indexName = "";
    data.forEach((e) => {
     if (e.TablesName) indexName += `<li>${e.TablesName}</li>`;
     else
      (DatabaseHostNameTag.innerHTML = e.host),
       (DatabaseDBNameTag.innerHTML = e.database),
       (DatabaseSVNameTag.innerHTML = e.mysqlVersion),
       (DatabaseUserNameTag.innerHTML = e.user);
    });
    DatabaseIndexNameTag.innerHTML = indexName;
   } else {
    DatabaseIndexNameTag.innerHTML = "No Indexes Found!";
   }
  })
  .catch((e) => {
   console.error(e);
  });

 axios.get("api/contact").then(({ data }) => {
  if (data.length > 0) {
   let contactList = "";
   data.forEach((e) => {
    const actualDateAgo = new Date(e.date);
    const today = new Date();
    const diffTime = Math.abs(today - actualDateAgo);
    const diffMinutes = Math.ceil(diffTime / (1000 * 60));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
    let ago = "";
    if (diffMinutes < 60) {
     ago = diffMinutes + " minutes ago";
    } else if (diffHours < 24) {
     ago = diffHours + " hours ago";
    } else if (diffDays < 7) {
     ago = diffDays + " days ago";
    } else if (diffWeeks < 4) {
     ago = diffWeeks + " weeks ago";
    } else if (diffMonths < 12) {
     ago = diffMonths + " months ago";
    } else {
     ago = diffYears + " years ago";
    }

    if (e.name)
     contactList += `<li>${e.name} <mark><small>&lt;${e.email}></small></mark><br/><small>${e.message}</small><br/><small class="text-muted">${ago}</small></li><hr/>`;
   });
   ContactLists.innerHTML = contactList;
   ContactRecords.innerHTML = data.length;
  } else {
   ContactLists.innerHTML = "<li>No Person!</li>";
  }
 });
};

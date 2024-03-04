// const lblCount = document.getElementById("lblCount");
// const btnIncrementCount = document.getElementById("btnIncrementCount");
// const btnBuyBuilding1 = document.getElementById("btnBuyBuilding1");
// const btnBuyBuilding2 = document.getElementById("btnBuyBuilding2");
// const btnBuyBuilding3 = document.getElementById("btnBuyBuilding3");

// let count = 0;
// let building1 = 0;
// let building2 = 0;
// let building3 = 0;

// btnIncrementCount.addEventListener("click", btnIncrementCount_click);
// btnBuyBuilding1.addEventListener("click", btnBuyBuilding1_click);
// btnBuyBuilding2.addEventListener("click", btnBuyBuilding2_click);
// btnBuyBuilding3.addEventListener("click", btnBuyBuilding3_click);

// function btnIncrementCount_click() {
//     count++;
//     lblCount.innerHTML = count;
// }

// function buildingIncrementCount() {    
//     count += (1 * building1);
//     count += (10 * building2);
//     count += (10000 * building3);
//     updateDisplay();
// }

// function btnBuyBuilding1_click() {
//     if (count >= 100) {
//         count -= 100;
//         building1++;
//     }
//     updateDisplay();
// }

// function btnBuyBuilding2_click() {
//     if (count >= 1000) {
//         count -= 1000;
//         building2++;
//     }
//     updateDisplay();
// }

// function btnBuyBuilding3_click() {
//   if (count >= 1000000) {
//       count -= 1000000;
//       building3++;
//   }
//   if (building3 === 1) {
//     alert("Achievement Unlocked: You've got a Big Div!");
//   }  
//   updateDisplay();
// }

// function updateDisplay() {
//     lblCount.innerHTML = count;
//     btnBuyBuilding1.disabled = count < 100
//     btnBuyBuilding1.title = `${building1} owned. Producing ${building1 * 1} beans per second.`
//     btnBuyBuilding1.innerHTML = `${building1} Dishwasher(s) (100 beans)`;
//     btnBuyBuilding2.disabled = count < 1000
//     btnBuyBuilding2.title = `${building2} owned. Producing ${building2 * 10} beans per second.`
//     btnBuyBuilding2.innerHTML = `${building2} Soaps(s) (1000 beans)`;
//     btnBuyBuilding3.disabled = count < 1000000
//     btnBuyBuilding3.title = `${building3} owned. Producing ${building3 * 10000} beans per second.`
//     btnBuyBuilding3.innerHTML = `${building3} BigDiv(s) (1,000,000 beans)`;    
//     //saveProgress();
// }

// function saveProgress() {
//     setCookie('count', count, 30);   
//     setCookie('building1', building1, 30);
//     setCookie('building2', building2, 30);
//     setCookie('building3', building3, 30);
//     console.log('Progress saved');
// }

// function loadProgress() {
//     count = Number(getCookie('count'));
//     building1 = Number(getCookie('building1'));
//     building2 = Number(getCookie('building2'));
//     building3 = Number(getCookie('building3'));
// }

// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     let expires = "expires="+d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }

//   function getCookie(cname) {
//     let name = cname + "=";
//     let ca = document.cookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }  


// //   count = 0;
// //   building1 = 0;
// //   building2 = 0;
// //   saveProgress();

// loadProgress();
// updateDisplay();
// setInterval(buildingIncrementCount, 1000);
// setInterval(saveProgress, 10000);



// //lblCount.innerHTML++;
// //alert(lblCount.innerHTML);
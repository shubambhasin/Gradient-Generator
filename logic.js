/* const color1 = document.querySelector('#color1')
const color2 = document.querySelector('#color2')
const color3 = document.querySelector('#color3')
const button = document.getElementById('#generate')

const generateGrad = () => {

    console.log(color1.value)
    console.log(color2.value)
    console.log(color3.value)

    document.body.style.backgroundColor = "linearGradient(red, yellow)"

}


button.addEventListener('click', generateGrad)


 */

const corner = document.querySelector(".corner");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const rootElements = document.documentElement;
const toRight = document.querySelector(".toRight");
const toRightBottom = document.querySelector(".toRightBottom");
const toRightTop = document.querySelector(".toRightTop");
const toLeft = document.querySelector(".toLeft");
const toLeftBottom = document.querySelector(".toLeftBottom");
const toLeftTop = document.querySelector(".toLeftTop");
const toTop = document.querySelector(".toTop");
const toBottom = document.querySelector(".toBottom");

// *************************direction function******************

// ************************************************************

corner.addEventListener("input", function (e) {
  rootElements.style.setProperty("--radius", e.target.value + "%");
});

color1.addEventListener("input", function (e) {
  rootElements.style.setProperty("--color1", e.target.value);
});
color2.addEventListener("input", function (e) {
  rootElements.style.setProperty("--color2", e.target.value);
});
color3.addEventListener("input", function (e) {
  rootElements.style.setProperty("--color3", e.target.value);
});

const toRyt = () => {
  toRight.addEventListener("click", function () {
    console.log("to right clicked");

    document.body.style.backgroundImage =
      "linear-gradient(" +
      "to right" +
      "," +
      color1.value +
      "," +
      color2.value +
      "," +
      color3.value +
      ")";
  });
};
const toRytBottom = () => {
    toRight.addEventListener("click", function () {
      console.log("to right bottom clicked");
  
      document.body.style.backgroundImage =
        "linear-gradient(" +
        "to right bottom" +
        "," +
        color1.value +
        "," +
        color2.value +
        "," +
        color3.value +
        ")";
    });
  };
  
  const toRytTop = () => {
    toRight.addEventListener("click", function () {
      console.log("to right top clicked");
  
      document.body.style.backgroundImage =
        "linear-gradient(" +
        "to right top" +
        "," +
        color1.value +
        "," +
        color2.value +
        "," +
        color3.value +
        ")";
    });
  }
  
  const toLft = () => {
    toRight.addEventListener("click", function () {
      console.log("to left clicked");
  
      document.body.style.backgroundImage =
        "linear-gradient(" +
        "to left" +
        "," +
        color1.value +
        "," +
        color2.value +
        "," +
        color3.value +
        ")";
    });
  };
  const toLftBottom = () => {
    toRight.addEventListener("click", function () {
      console.log("to left bottom clicked");
  
      document.body.style.backgroundImage =
        "linear-gradient(" +
        "to left bottom" +
        "," +
        color1.value +
        "," +
        color2.value +
        "," +
        color3.value +
        ")";
    });
  };
  const toLftTop = () => {
    toRight.addEventListener("click", function () {
      console.log("to left top clicked");
  
      document.body.style.backgroundImage =
        "linear-gradient(" +
        "to left top" +
        "," +
        color1.value +
        "," +
        color2.value +
        "," +
        color3.value +
        ")";
    });
  };
  const toTp = () => {
    toRight.addEventListener("click", function () {
      console.log("to top clicked");
  
      document.body.style.backgroundImage =
        "linear-gradient(" +
        "to top" +
        "," +
        color1.value +
        "," +
        color2.value +
        "," +
        color3.value +
        ")";
    });
  };
  const toBtm = () => {
    toRight.addEventListener("click", function () {
      console.log("to bottom clicked");
  
      document.body.style.backgroundImage =
        "linear-gradient(" +
        "to bottom" +
        "," +
        color1.value +
        "," +
        color2.value +
        "," +
        color3.value +
        ")";
    });
  };





























/* function toLeft()
{
    
}
function toBottom()
{
    
}

function toTop()
{
    
}

function toBottomRight()
{
    
}

function toBottomLeft()
{
    
}
function toTopRight()
{
    
}
function toTopLeft(){
    
}
 */

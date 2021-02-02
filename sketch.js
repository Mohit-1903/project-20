var cat, garden, mouse;
function preload() {
    //load the images here
    garden = loadImage(garden_0);
    cat1_0 = loadImage(cat1);
    cat_0 = loadAnimation(cat2,cat3);
    cat4_0 = loadImage(cat4);

}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here

    garden = createSprite(500,400,1,1);
    garden.addImage(garden_0);

    cat = createSprite(300,300,1,1);
    cat.addAnimation(cat_0);
    cat.addImage(cat1_0);
    cat.addImage(cat4_0);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

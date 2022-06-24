
const demo = () =>{
    const a = document.getElementById("a").value; 
     const b =  document.getElementById("b").value;
    //  const n1=document.getElementById("demo");
    //  const n2=document.getElementById("demos");
    if (a > b) {
    //  n1.innerHTML = "a is greater";
      alert("a is greater")
    } 
    else if(b>a){
    //  n2.innerHTML = "b is greater";
    alert("b is greater");
    
    }
    else{
    
    }
    }
    
    //print
    
     let text = "";
    // let n=document.getElementById("val").value;
    for (let i = 0; i <=50; i++) {
      text += i + " ";
    }
    document.getElementById("print").innerHTML = text;

    //welcome
    let text1= "";
    for(let i=0;i<10;i++){
        text1 += "Welcome"+ "<br>";
        }
        document.getElementById("welcome").innerHTML = text1;
    //current day of this week
    let day = "";
    switch(new Date().getDay()){
        case 0:
            day="sunday";
            break;
        case 1:
            day="monday";
            break;
        case 2:
            day="tuesday";
            break;
        case 3:
            day="wednesday";
            break;
        case 4:
            day="thursday";
            break;
        case 5:
            day="friday";
            break;
        case 6:
            day="saturday";
            break;
    }
    document.getElementById("day").innerHTML = day;
    //length of String
    let str="I am learning Javascript";
    document.getElementById("str").innerHTML = str.length;
    //sort
    const fruits=["Banana",  "Apple", "Orange"];
    for(let i=0;i<fruits.length;i++)
    {
        for(let j=0;j<fruits.length;j++)
        {   if(fruits[i]<fruits[j])
            {
                let temp=fruits[i];
                fruits[i]=fruits[j];
                fruits[j]=temp;
            }
    
        }
    }  
    document.getElementById("fruits").innerHTML = fruits;
    //biggest number
    const numbers=[45, 10, 150, 2, 100, 6];
    for(let i=0;i<numbers.length;i++)
    {
        for(let j=0;j<numbers.length;j++)
        {   if(numbers[i]<numbers[j])
            {
                let temp=numbers[i];
                numbers[i]=numbers[j];
                numbers[j]=temp;
            }
    
        }
    }  
    document.getElementById("numbers").innerHTML = numbers[numbers.length-1];
    //substring
    let sub="Welcome to our learning Program"
    let result= text.includes("to")
    if(result==true)
    
        sub="'to' is present in the String";
        else
        sub="'to' is not present in the String";
        document.getElementById("sub").innerHTML = sub;
    //greater Array
    const s = [10, 40, 45, 60, 80, 100];
    let Ar="";
    for(let i=0;i<s.length;i++)
    {
        if(s[i]>50)
        Ar+=s[i]+ " ";
    }
    document.getElementById("arr").innerHTML = Ar;
    //map
    const ma= [5, 10, 15, 25];
    const ar=ma.map(func);
    document.getElementById("san").innerHTML=ar;
    function func(ma){
        return ma*5;
    }
    //16
    
    
    function myFunction(s1, s2) {
      return s1 + s2;
    }
    let das=myFunction(15, 20)
    document.getElementById("var").innerHTML = das ;
    //17
    let myFunction1 = (a, b) => a + b;
    let vari=myFunction1(15,20);
    document.getElementById("vari").innerHTML = vari;
    //18
    const d = new Date("2012-Apr-20 10:10:10");
    document.getElementById("date").innerHTML = d;
    //19
    function fullname(fname, lname)
    {
        this.fname=fname;
        this.lname=lname;
          return fname.concat(" ",(lname));
    }
    
    document.getElementById("cons").innerHTML = fullname("Luvy", "Riyaz");
function openBox(box){
    display = document.getElementById(box).style.display;
    if(display === 'none'){
        document.getElementById(box).style.display = "block";
    }
    else{
        document.getElementById(box).style.display = "none";
    }
}

let API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ1NmRhN2Y0ODVlZjBiNTFiNDVkYTkxMWEwZmRjYTBkZmU0NmRjNjZmMzIwMmJiYWZmOWNhMDI0NDM3YTg4NjJiMzk0MzkxYmY4ZmNmMDA4In0.eyJhdWQiOiIxMCIsImp0aSI6ImQ1NmRhN2Y0ODVlZjBiNTFiNDVkYTkxMWEwZmRjYTBkZmU0NmRjNjZmMzIwMmJiYWZmOWNhMDI0NDM3YTg4NjJiMzk0MzkxYmY4ZmNmMDA4IiwiaWF0IjoxNTkyNDgxMTY5LCJuYmYiOjE1OTI0ODExNjksImV4cCI6MTkwODAxMzk2OSwic3ViIjoiMTE2NiIsInNjb3BlcyI6WyJ1c2VyQmFzZUluZm8iLCJ1c2VyRGV0YWlsZWRJbmZvIiwidXNlckNvdXJzZUluZm8iXX0.XSgmTmYRvGPk3K0cZoGSN9cXmDzp6h9MzgKA92ZxvTw9ZiHdW4A7XhqPpaCBNgSctrf_I30T_c_xP5ywvpjm6esHG4jWVpXznnbrgDyJgPDzEiBu9jaLODoTKiOq1D0gUodj509zIDdHTi__X1-9XcfvXlfdDL4Ycdz9ucwZLzThrFUTIDbfJ0J2hywXkeXWb8bPYvqWOD_f9q8IuHu3lFUbPhDfyYCTE0hnITuRbVB9A7kU8-ihN_4fLhcSxoR36Yy9yY7mORbNah6m6c7J-ait8Y2NyXGpntwkX63dINVoW0fSu6Z8tHmaT-hmUUEFpCnTeZN1aV7XoiwZ2Ka8vG1qjUgYOw8uYLOaspyHPzFsxIPN8gVXvk_0VSdckuJD-OSVx8bEAlnFBx3JeehGwR1gLyTWWLtDyZjd8-0PzEPBKv8C5hXNoz8w-LnWLYvIvHULRxETlrOb_mAtwTHp9s5t2dgDWM21RUjXfg8oT_--JHtibNcIpgtxbmIFH0I98aA6cNknbemkfvSBcu7FGvQeoaHfJj3wAZRTPYEYENJ-rAcXRhQQOJ6ZwnaRSHDvSlYqJ_ouB26bH83JEtAKsrJZvhGhZce5cu8_fk9Sp91fHmTqN46zLu5LEdJjnBmSKcnDvUX-2Jl0HOcu4yRQWnc3yJTem5IpZfHkFPmGb7E";
let client = new INTITAClient({
    key: API_KEY,
  });
  
  client.getUserDetails(function(error, data) {
          document.getElementById("avatar").src = data.avatar;
          document.getElementById("firstName").innerHTML += data.firstName;
          document.getElementById("secondName").innerHTML += data.secondName;
          document.getElementById("phone").innerHTML += data.phone;
          document.getElementById("address").innerHTML += data.address;
          document.getElementById("place").innerHTML += data.city+ ", "+data.country;
          document.getElementById("trainer").innerHTML += data.trainers[0].firstName + ' ' + data.trainers[0].secondName ;
          document.getElementById("email").innerHTML += data.email;
          document.getElementById("educationForm").innerHTML += data.educationForm;
          console.log(error, data);
      });
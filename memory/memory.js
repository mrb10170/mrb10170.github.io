

      var memory = [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var checkForPair = true;   <!-- checks if 2 cards are flipped  -->
      var x;
	  var i;
		var cardnumber;
      
      function swap1()
      {
         if (memory[1] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[1] = 1;
            card1.src = "images/card7.jpg";
            if (checkForPair == true)
            {
               if (memory[1] == 1 && memory[14] == 1)
               {
                  card1.src =  "images/cardblank.jpg";
                  memory[1] = 2;
                  card14.src = "images/cardblank.jpg";
                  memory[14] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
                     
               } 
               else
                  flipBack();
            }
         }
      }

      function swap2()
      {
         if (memory[2] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[2] = 1;
            card2.src = "images/card6.jpg";
            if (checkForPair == true)
            {
               if (memory[2] == 1 && memory[10] == 1)
               {
                  card2.src =  "images/cardblank.jpg";
                  memory[2] = 2;
                  card10.src = "images/cardblank.jpg";
                  memory[10] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function swap3()
      {
         if (memory[3] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[3] = 1;
            card3.src = "images/card2.jpg";
            if (checkForPair == true)
            {
               if (memory[3] == 1 && memory[13] == 1)
               {
                  card3.src =  "images/cardblank.jpg";
                  memory[3] = 2;
                  card13.src = "images/cardblank.jpg";
                  memory[13] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function swap4()
      {
         if (memory[4] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[4] = 1;
            card4.src = "images/card1.jpg";
            if (checkForPair == true)
            {
               if (memory[4] == 1 && memory[11] == 1)
               {
                  card4.src =  "images/cardblank.jpg";
                  memory[4] = 2;
                  card11.src = "images/cardblank.jpg";
                  memory[11] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function swap5()
      {
         if (memory[5] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[5] = 1;
            card5.src = "images/card3.jpg";
            if (checkForPair == true)
            {
               if (memory[5] == 1 && memory[15] == 1)
               {
                  card5.src =  "images/cardblank.jpg";
                  memory[5] = 2;
                  card15.src = "images/cardblank.jpg";
                  memory[15] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function swap6()
      {
         if (memory[6] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[6] = 1;
            card6.src = "images/card5.jpg";
            if (checkForPair == true)
            {
               if (memory[6] == 1 && memory[16] == 1)
               {
                  card6.src =  "images/cardblank.jpg";
                  memory[6] = 2;
                  card16.src = "images/cardblank.jpg";
                  memory[16] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function swap7()
      {
         if (memory[7] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[7] = 1;
            card7.src = "images/card8.jpg";
            if (checkForPair == true)
            {
               if (memory[7] == 1 && memory[8] == 1)
               {
                  card7.src =  "images/cardblank.jpg";
                  memory[7] = 2;
                  card8.src = "images/cardblank.jpg";
                  memory[8] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function swap8()
      {
         if (memory[8] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[8] = 1;
            card8.src = "images/card8.jpg";
            if (checkForPair == true)
            {
               if (memory[8] == 1 && memory[7] == 1)
               {
                  card7.src =  "images/cardblank.jpg";
                  memory[7] = 2;
                  card8.src = "images/cardblank.jpg";
                  memory[8] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function swap9()
      {
         if (memory[9] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[9] = 1;
            card9.src = "images/card4.jpg";
            if (checkForPair == true)
            {
               if (memory[9] == 1 && memory[12] == 1)
               {
                  card9.src =  "images/cardblank.jpg";
                  memory[9] = 2;
                  card12.src = "images/cardblank.jpg";
                  memory[12] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function swap10()
      {
         if (memory[10] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[10] = 1;
            card10.src = "images/card6.jpg";
            if (checkForPair == true)
            {
               if (memory[10] == 1 && memory[2] == 1)
               {
                  card10.src =  "images/cardblank.jpg";
                  memory[10] = 2;
                  card2.src = "images/cardblank.jpg";
                  memory[2] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function swap11()
      {
         if (memory[11] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[11] = 1;
            card11.src = "images/card1.jpg";
            if (checkForPair == true)
            {
               if (memory[11] == 1 && memory[4] == 1)
               {
                  card11.src =  "images/cardblank.jpg";
                  memory[11] = 2;
                  card4.src = "images/cardblank.jpg";
                  memory[4] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function swap12()
      {
         if (memory[12] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[12] = 1;
            card12.src = "images/card4.jpg";
            if (checkForPair == true)
            {
               if (memory[12] == 1 && memory[9] == 1)
               {
                  card12.src =  "images/cardblank.jpg";
                  memory[12] = 2;
                  card9.src = "images/cardblank.jpg";
                  memory[9] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function swap13()
      {
         if (memory[13] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[13] = 1;
            card13.src = "images/card2.jpg";
            if (checkForPair == true)
            {
               if (memory[13] == 1 && memory[3] == 1)
               {
                  card13.src =  "images/cardblank.jpg";
                  memory[13] = 2;
                  card3.src = "images/cardblank.jpg";
                  memory[3] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function swap14()
      {
         if (memory[14] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[14] = 1;
            card14.src = "images/card7.jpg";
            if (checkForPair == true)
            {
               if (memory[14] == 1 && memory[1] == 1)
               {
                  card14.src =  "images/cardblank.jpg";
                  memory[14] = 2;
                  card1.src = "images/cardblank.jpg";
                  memory[1] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function swap15()
      {
         if (memory[15] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[15] = 1;
            card15.src = "images/card3.jpg";
            if (checkForPair == true)
            {
               if (memory[15] == 1 && memory[5] == 1)
               {
                  card15.src =  "images/cardblank.jpg";
                  memory[15] = 2;
                  card5.src = "images/cardblank.jpg";
                  memory[5] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function swap16()
      {
         if (memory[16] == 0 )
         {
            if (checkForPair == true)
               checkForPair = false;
            else
               checkForPair = true;
            memory[16] = 1;
            card16.src = "images/card5.jpg";
            if (checkForPair == true)
            {
               if (memory[16] == 1 && memory[6] == 1)
               {
                  card16.src =  "images/cardblank.jpg";
                  memory[16] = 2;
                  card6.src = "images/cardblank.jpg";
                  memory[6] = 2;
                  for ( x = 1; x <= 16; x++ )
                  {
                     if (memory[x] != 2 )
                        break;
                     if ( x == 16 )
                        window.alert( "Congratulations!  You Won!!" );
                  }
               } 
               else
                  flipBack();
            }
         }
      }

      function flipBack()
      {
		 
         document.getElementById('answers').innerHTML += '<br>These do not match';
		 setTimeout(function (){ 

			 for (i = 1; i <= 16; i++) {
				 cardnumber = "card" + i;
				 if (memory[i] == 1)  {
					document.getElementById(cardnumber).src = "images/cardback.jpg";
				memory[i] = 0; }
			 }
		 }, 1000);
		 
      }
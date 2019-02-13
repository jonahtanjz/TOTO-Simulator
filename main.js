function simulate() {
    
    var s = document.getElementById('system').value;
    var num = document.getElementById('numbers').value;
	var n = [];
	n = num.split(",");
	for (let p in n) 
	{
	    n[p] = parseInt(n[p],10);
	}
	var sim = document.getElementById('sim').value;
	sim = parseInt(sim,10);
	var lot = [];
	var divv = document.getElementById("result");

	for (let n=0; n<5; n++)
    {
        lot[n] = 100 + n;
    }
	var g1=0, g2=0, g3=0, g4=0, g5=0, g6=0, g7 = 0;
    
    for (let m=1; m<(sim+1); m++)
    {
	
	var c = 0, a = 0;
    for (let i=5; i<11; i++)
    {
        lot[i] = Math.floor((Math.random() * 49)+1);

        while ((lot[i] == lot[i-5]) || (lot[i] == lot[i-4]) || (lot[i] == lot[i-3]) || (lot[i] == lot[i-2]) || (lot[i] == lot[i-1]))
        {
            lot[i] = Math.floor((Math.random() * 49)+1);
        }
    }
        var anum = Math.floor((Math.random() * 49)+1);
        while ((anum == lot[5]) || (anum == lot[6]) || (anum == lot[7]) || (anum == lot[8]) || (anum == lot[9]) || (anum == lot[10]))
        {
            anum = Math.floor((Math.random() * 49)+1);
        }
		var result = document.createTextNode(lot[5] + "  " + lot[6] + "  " + lot[7] + "  " + lot[8] + "  " + lot[9] + "  " + lot[10] + " , Add Num: " + anum + "\n");
		let para = document.createElement("p");
		para.appendChild(result);
		divv.appendChild(para);
     

    for (let i=0; i<s; i++)
	{
		for (let z=5; z<11; z++)
		{
			if (n[i] == lot[z])
			{
				c++;
			}
		}
		if (n[i]== anum)
		{
			a = 1;
		}
	}

    if (c == 6)
    {
		g1 = g1 + 1;
		let para = document.createElement("p");
        para.appendChild(document.createTextNode("WIN 1 at " + m +"\n"));
        divv.appendChild(para);
    }

    else if ((c == 5) && (a == 1) )
    {
        g2 = g2 + 1;
        let para = document.createElement("p");
        para.appendChild(document.createTextNode("WIN 2 at " + m +"\n"));
        divv.appendChild(para);
    }

    else if (c == 5)
    {
        g3 = g3 + 1;
        let para = document.createElement("p");
        para.appendChild(document.createTextNode("WIN 3 at " + m +"\n"));
        divv.appendChild(para);
    }

    else if ((c == 4) && (a == 1) )
    {
        g4 = g4 + 1;
        let para = document.createElement("p");
        para.appendChild(document.createTextNode("WIN 4 at " + m +"\n"));
        divv.appendChild(para);
    }

    else if (c == 4)
    {
        g5 = g5 + 1;
        let para = document.createElement("p");
        para.appendChild(document.createTextNode("WIN 5 at " + m +"\n"));
        divv.appendChild(para);
    }

    else if ((c == 3) && (a == 1) )
    {
        g6 = g6 + 1;
        let para = document.createElement("p");
        para.appendChild(document.createTextNode("WIN 6 at " + m +"\n"));
        divv.appendChild(para);
    }

    else if (c == 3)
    {
        g7 = g7 + 1;
        let para = document.createElement("p");
        para.appendChild(document.createTextNode("WIN 7 at " + m +"\n"));
        divv.appendChild(para);
    }

    else
    {
        let para = document.createElement("p");
        para.appendChild(document.createTextNode("LOSE at " + m +"\n"));
        divv.appendChild(para);
    }

    }
    
    let para = document.createElement("p");
    para.appendChild(document.createTextNode(" Group 1: " + g1 + " Group 2: " + g2 + " Group 3: " + g3 + " Group 4: " + g4 + " Group 5: " + g5 + " Group 6: " + g6 + " Group 7: " + g7 + "\n"));
    divv.appendChild(para);
    
}

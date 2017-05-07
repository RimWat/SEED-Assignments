
public class FindGreatest {

	double n1;
	double n2;
	double n3;
	public FindGreatest() {
		// TODO Auto-generated constructor stub
		n1 = 0;
		n2 = 0;
		n3 = 0;
	}
	public FindGreatest(double num1, double num2, double num3) {
		// TODO Auto-generated constructor stub
		n1 = num1;
		n2 = num2;
		n3 = num3;
	}
	
	public double findGreatestNum(double num1, double num2){
		if(num1 > num2)
			return num1;
		else
			return num2;
	}
	
	public double findSmallestNum(double num1, double num2){
		if(num1 < num2)
			return num1;
		else
			return num2;
	}
	

}

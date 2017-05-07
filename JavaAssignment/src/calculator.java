
public class calculator {
	double n1;
	double n2;
	double n3;
	public calculator() {
		// TODO Auto-generated constructor stub
		n1 = 0;
		n2 = 0;
		n3 = 0;
	}
	public calculator(double num1, double num2, double num3){
		n1 = num1;
		n2 = num2;
		n3 = num3;
	}
	
	public double add(double num1, double num2)
	{
		return (num1+num2);
	}
	public double subtract(double num1, double num2)
	{
		return (num1-num2);
	}
	public double divide(double num1, double num2)
	{
		
		return (num1/num2);
	}
	public double multiply(double num1, double num2)
	{
		
		return (num1*num2);
	}
}

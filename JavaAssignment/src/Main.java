
public class Main {

	public Main() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
		double num1 = 42;
		double num2 = 75;
		double num3 = 84;
		calculator calc = new calculator();
		FindGreatest fg = new FindGreatest();
		TruthOrFalse bool = new TruthOrFalse();
		
		System.out.println(num1+" + "+num2+" = "+calc.add(num1, num2));
		System.out.println(num1+" - "+num2+" = "+calc.subtract(num1, num2));
		System.out.println(num1+" / "+num2+" = "+calc.divide(num1, num2));
		System.out.println(num1+" / "+num2+" = "+calc.multiply(num1, num2));
		System.out.println("greatest number out of "+num2+" and "+num1+" is: "+fg.findGreatestNum(num1, num2));
		System.out.println("greatest number out of "+num1+" and "+num2+" is: "+fg.findGreatestNum(num1, num2));
		
		if(bool.Logic("!a"))
		{
			System.out.println("!a = true");
		}
		else
		{
			System.out.println("!a = false");
		}
		
		if(bool.Logic("a|b"))
		{
			System.out.println("a|b = true");
		}
		else
		{
			System.out.println("a|b = false");
		}
		if(bool.Logic("(!a&b)|(a&!b)"))
		{
			System.out.println("(!a&b)|(a&!b) = true");
		}
		else
		{
			System.out.println("(!a&b)|(a&!b) = false");
		}
		
		calculator calc2 = new calculator(num1,num2,num3);
		FindGreatest fg2 = new FindGreatest(num1,num2,num3);
	}

}

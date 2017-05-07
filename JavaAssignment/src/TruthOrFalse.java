
public class TruthOrFalse {
	boolean a;
	boolean b;
	public TruthOrFalse() {
		// TODO Auto-generated constructor stub
		a = true;
		b = false;
	}
	public TruthOrFalse(boolean bool1, boolean bool2) {
		// TODO Auto-generated constructor stub
		a = bool1;
		b = bool2;
	}
	public boolean Logic(String str)
	{
		if(str == "!a")
		{
			return !a;
		}
		else if(str == "a|b")
		{
			return a|b;
		}
		else if(str == "(!a&b)|(a&!b)")
		{
			return (!a&b)|(a&!b);
		}
		else
			return false;
	}
}

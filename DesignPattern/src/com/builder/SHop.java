package com.builder;

public class SHop {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Phone p= new Phone("Android", 3, "QUallCOm", 3500, 5.5);
		
		System.out.println(p);
		
		
		Phone p1= new PhoneBuilder().setOs("MI").setProcessor("snap drogon").setRam(12).getPhone();
		
		System.out.println("with Builder "+p1);
	}

}

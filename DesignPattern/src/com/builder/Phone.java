package com.builder;

public class Phone {

	private String os;
	private int ram;
	private String processor;
	private int battery;
	private double screen;
	
	public Phone(String os, int ram, String processor, int battery, double screen) {
		super();
		this.os = os;
		this.ram = ram;
		this.processor = processor;
		this.battery = battery;
		this.screen = screen;
	}

	@Override
	public String toString() {
		return "Phone [os=" + os + ", ram=" + ram + ", processor=" + processor + ", battery=" + battery + ", screen="
				+ screen + "]";
	}
	
	
	
}

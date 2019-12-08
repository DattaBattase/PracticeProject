package com.datta.algorithms;

public class BubbleSortSelf {

	public static void main(String[] args) {
		
		int[] arr = {3,9,2,1,5,6,7,8,4};

		
		for (int i=arr.length-1; i>0; i-- )
		{
			int temp=0;
			System.out.println("temp is "+temp );
			if (arr[i]<arr[i-1])
			{
				temp=arr[i];
				arr[i]=arr[i-1];
				arr[i-1]=temp;
				
			}
		}
		
		for(int ar:arr)
			System.out.println(ar +" ");

	}

}

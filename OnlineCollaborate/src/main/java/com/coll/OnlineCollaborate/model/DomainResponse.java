package com.coll.OnlineCollaborate.model;

public class DomainResponse {

	int responsecode;
	String responseMessage;
	public DomainResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public DomainResponse(int responsecode, String responseMessage) {
		super();
		this.responsecode = responsecode;
		this.responseMessage = responseMessage;
	}
	public int getResponsecode() {
		return responsecode;
	}
	public void setResponsecode(int responsecode) {
		this.responsecode = responsecode;
	}
	public String getResponseMessage() {
		return responseMessage;
	}
	public void setResponseMessage(String responseMessage) {
		this.responseMessage = responseMessage;
	}
	
}

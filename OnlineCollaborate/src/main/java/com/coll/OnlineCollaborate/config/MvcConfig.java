package com.coll.OnlineCollaborate.config;

import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

public class MvcConfig extends WebMvcConfigurerAdapter{
	
	@Bean
	public ViewResolver configureViewResolver() {
		InternalResourceViewResolver viewResolver=new InternalResourceViewResolver();
		viewResolver.setPrefix("web-INF/views/");
		viewResolver.setSuffix(".jsp");
		return viewResolver;
	}

}

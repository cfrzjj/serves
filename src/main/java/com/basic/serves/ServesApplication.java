package com.basic.serves;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"org.flowable.ui.modeler.conf","org.flowable.ui.common.rest.idm.remote","org.flowable.ui.common.security"})
public class ServesApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServesApplication.class, args);
	}

}

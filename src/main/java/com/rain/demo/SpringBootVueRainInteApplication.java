package com.rain.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * @author rain
 */
@SpringBootApplication(exclude= {DataSourceAutoConfiguration.class})
public class SpringBootVueRainInteApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(SpringBootVueRainInteApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringBootVueRainInteApplication.class, args);
    }

}

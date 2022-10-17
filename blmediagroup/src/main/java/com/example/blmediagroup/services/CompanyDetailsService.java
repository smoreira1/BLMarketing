package com.example.blmediagroup.services;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class CompanyDetailsService {
    private DynamoDBMapper dynamoDBMapper;

    CompanyDetailsService(@Autowired DynamoDBMapper dynamoDBMapper){
        this.dynamoDBMapper = dynamoDBMapper;
    }

}

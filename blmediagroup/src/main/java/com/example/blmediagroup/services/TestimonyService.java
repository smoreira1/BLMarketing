package com.example.blmediagroup.services;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.document.DeleteItemOutcome;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;
import com.example.blmediagroup.models.Testimony;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Map;

@Service
public class TestimonyService {
    private DynamoDBMapper dynamoDBMapper;

    TestimonyService(@Autowired DynamoDBMapper dynamoDBMapper){
        this.dynamoDBMapper = dynamoDBMapper;
    }

    public Testimony getTestimony(String itemId){
        return dynamoDBMapper.load(Testimony.class, itemId);
    }

    public ArrayList<Testimony> getTestimonies(){
        ArrayList<Testimony> testimonies = new <Testimony>ArrayList();
        AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().build();

        ScanRequest scanRequest = new ScanRequest()
                .withTableName("Testimony");
        ScanResult result = client.scan(scanRequest);
        for (Map<String, AttributeValue> item : result.getItems()){

        }
        return testimonies;
    }

    public void createTestimony(Testimony testimony){
        this.dynamoDBMapper.save(testimony);
    }

    public void updateTestimony(Testimony testimony){
        Testimony getItemToUpdate = this.dynamoDBMapper.load(Testimony.class,testimony.getItemId());
        getItemToUpdate.setPersonName(testimony.getPersonName());
        getItemToUpdate.setDescription(testimony.getDescription());
        getItemToUpdate.setTitle(testimony.getTitle());
        getItemToUpdate.setDate(testimony.getDate());
        getItemToUpdate.setCreatedDate(testimony.getCreatedDate());
        this.dynamoDBMapper.save(getItemToUpdate);
    }

    public void deleteTestimony(String itemId){
        DynamoDB dynamoDB = new DynamoDB(new AmazonDynamoDBClient(
                new ProfileCredentialsProvider()));
        Table table = this.dynamoDBMapper.getTable("Testimony");
        DeleteItemOutcome outcome = table.deleteItem("IDnum", 151);
    }
}

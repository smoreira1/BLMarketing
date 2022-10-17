package com.example.blmediagroup.services;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
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

    public Testimony getItem(String itemId){
        return dynamoDBMapper.load(Testimony.class, itemId);
    }

    public ArrayList<Testimony> getItems(){
        ArrayList<Testimony> testimonies = new <Testimony>ArrayList();
        AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().build();
        ScanRequest scanRequest = new ScanRequest()
                .withTableName("Testimony");
        ScanResult result = client.scan(scanRequest);
        for (Map<String, AttributeValue> item : result.getItems()){
            Testimony testimony = new Testimony();
//            testimony.setCreatedDate(item.get("CreatedDate").toString());
            testimony.setTitle(item.get("Title").toString());
//            testimony.setDescription(item.get("Description").toString());
//            testimony.setItemId(item.get("ItemId").toString());
//            testimony.setPersonName(item.get("PersonName").toString());
//            testimony.setDate(item.get("Date").toString());
        }
        return testimonies;
    }

    public void createItem(Testimony testimony){
        this.dynamoDBMapper.save(testimony);
    }

    public void updateItem(Testimony testimony){
        Testimony getItemToUpdate = this.dynamoDBMapper.load(Testimony.class,testimony.getItemId());
        getItemToUpdate.setPersonName(testimony.getPersonName());
        getItemToUpdate.setDescription(testimony.getDescription());
        getItemToUpdate.setTitle(testimony.getTitle());
        getItemToUpdate.setDate(testimony.getDate());
        getItemToUpdate.setCreatedDate(testimony.getCreatedDate());
        this.dynamoDBMapper.save(getItemToUpdate);
    }

    public void deleteItem(String itemId){

    }
}

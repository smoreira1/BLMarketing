package com.example.blmediagroup;

@DynamoDBTable(tableName = "Testimony")
public class Testimony {
    private String itemId;
    private String title;
    private String date;
    private String description;
    private String PersonName;
}

package com.example.blmediagroup.interfaces;

import java.util.ArrayList;

public interface ICrud {
    public <T> void createItem(T object);
    public void updateItem(String itemId);
    public void deleteItem(String itemId);
    public <T> T getItem();
    public <T> ArrayList<T> getItems();
}

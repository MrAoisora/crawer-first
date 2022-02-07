package com.mycrawer.crawerfirst;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.io.IOException;

public class CrawerFirst {
    public static void main(String[] args) throws IOException {
        //1.打开浏览器，创建HttpClient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();
        //2.输入网址,创建get请求对象
        HttpGet httpGet = new HttpGet("http://www.tianpk25.com/arts/747884.html");
        //3.按下回车，发送请求，返回响应,通过excucute方法执行发送请求的命令
        CloseableHttpResponse response = httpClient.execute(httpGet);
        //4.解析响应，得到数据
        //判断状态吗是否为200
        if(200 == response.getStatusLine().getStatusCode()){
            HttpEntity httpEntity = response.getEntity();//获取响应体
            String content = EntityUtils.toString(httpEntity, "utf8");
            System.out.println(content);
        }
    }
}

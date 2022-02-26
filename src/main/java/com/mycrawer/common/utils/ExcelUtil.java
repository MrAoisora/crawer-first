package com.mycrawer.common.utils;

import com.alibaba.excel.metadata.Sheet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class ExcelUtil {
    private static Logger logger = LoggerFactory.getLogger(ExcelUtil.class);
    private static Sheet initSheet;

    static {
        initSheet = new Sheet(0,0);
        initSheet.setAutoWidth(true);
        initSheet.setSheetNo(0);
        initSheet.setSheetName("测试sheet");

    }
}

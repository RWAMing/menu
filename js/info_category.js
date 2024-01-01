import { Value_Text } from "./class.js";

// 카테고리
export const category = new Value_Text();
category.naming("category", "음식 종류");
category.add("korean", "한식");
category.add("japanese", "일식");
category.add("chinese", "중식");
category.add("western", "양식");
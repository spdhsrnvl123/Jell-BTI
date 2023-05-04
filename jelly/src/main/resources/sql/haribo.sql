--alter table j_info modify j_detail null;

select * from jinfo order by j_idx desc;

select * from jinfo where j_name = '하리보 해피 그레이프';

select * from jinfo where image_url is not null;

** 중복 값 제거
delete from jinfo where j_name = '하리보 웜즈' and j_gram = '200g';
delete from jinfo where j_name = '하리보 스타믹스' and j_gram = '275g';
delete from jinfo where j_name = '하리보 웜즈 사우어' and j_idx=4695;
delete from jinfo where j_name = '하리보해피콜라사우어' and j_idx=4692;

commit;

** url이 필요한 행 업데이트
update jinfo set image_url = 'https://assets.haribo.com/image/upload/s--wAREUl8J--/ar_1452:1914,c_fill,f_auto,q_60/w_1120/v1/consumer-sites/ko-kr/Products/Goldbaeren_100g_4001686301555.png'
where j_name like '%골드베렌';
update jinfo set image_url = 'https://assets.haribo.com/image/upload/s---aeSQcX2--/ar_1448:2000,c_fill,f_auto,q_60/w_1081/v1/consumer-sites/ko-kr/Products/Worms-100-g_5996379377360.png'
where j_name = '하리보 웜즈';
update jinfo set image_url = 'https://assets.haribo.com/image/upload/s--dqTedUEd--/ar_1469:2031,c_fill,f_auto,q_60/w_640/v1/consumer-sites/ko-kr/Products/Starmix_100g_5012035901738.png'
where j_name = '하리보 스타믹스';
update jinfo set image_url = 'https://assets.haribo.com/image/upload/s--IEfCjPLv--/ar_1463:2024,c_fill,f_auto,q_60/w_693/v1/consumer-sites/ko-kr/Products/HAPPY_COLA_PACKSHOT.png'
where j_name = '하리보 해피 콜라향 구미 젤리';
update jinfo set image_url = 'https://assets.haribo.com/image/upload/s--k1ncuDLg--/ar_1459:2027,c_fill,f_auto,q_60/w_632/v1/consumer-sites/ko-kr/Products/Fruity_Bussi_100g_4001686375754.png'
where j_name = '하리보 혼합과일쥬스 골드베렌구미';
update jinfo set image_url = 'https://assets.haribo.com/image/upload/s--uWm0mpkU--/ar_1449:2003,c_fill,f_auto,q_60/w_622/v1/consumer-sites/ko-kr/Products/Worms-Zourr-100-g_8691216095557.png'
where j_name = '하리보 웜즈 사우어';
update jinfo set image_url = 'https://assets.haribo.com/image/upload/s--iwT51Kj0--/ar_1466:2021,c_fill,f_auto,q_60/w_642/v1/consumer-sites/ko-kr/Products/Happy_Cola_Zourr_100-g_8691216096370.png'
where j_name = '하리보해피콜라사우어';
update jinfo set image_url = 'https://assets.haribo.com/image/upload/s--iwT51Kj0--/ar_1466:2021,c_fill,f_auto,q_60/w_642/v1/consumer-sites/ko-kr/Products/Happy_Cola_Zourr_100-g_8691216096370.png'
where j_name = '하리보 해피 그레이프' and j_idx = 4727;

--drop table j_info;

desc j_info;


SELECT * FROM USER_CONSTRAINTS WHERE TABLE_NAME = "tabnam";

alter table j_rate drop constraint FKAFLAL52F0RM4FF5DNHC3PJC9V;

--FKIVJ87KTC3KUXQWNMGYUAJOHFR

select * from member;

select * from j_comment;

select * from j_rate;

select m from member m where m.m_email like '';

delete from j_rate;

commit;
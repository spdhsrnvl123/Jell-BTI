commit;

** jinfo 테이블 확인하기
select * from jinfo order by j_idx desc;
select * from jinfo where image_url is not null;
select * from jinfo where image_url is null;
select * from jinfo a, jrate b where a.j_idx = b.j_idx;

** 중복 값 제거
delete from jinfo where j_name = '하리보 웜즈' and j_gram = '200g';
delete from jinfo where j_name = '하리보 스타믹스' and j_gram = '275g';
delete from jinfo where j_name = '하리보 웜즈 사우어' and j_idx=4695;
delete from jinfo where j_name = '하리보해피콜라사우어' and j_idx=4692;

** 이미지 url 없는 데이터 제거
delete from jinfo where image_url is null;

** 젤리 평점 구하기 test
select a.* ,(select avg(b.j_star) from jrate b) as total_score  from jrate a;

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

** 제약사항 확인
SELECT * FROM USER_CONSTRAINTS WHERE TABLE_NAME = "tabnam";
alter table j_rate drop constraint FKAFLAL52F0RM4FF5DNHC3PJC9V;

select * from jrate;

** 젤리 후기 더미데이터 삽입
commit;

select * from(select rownum, a.* from jrate a order by r_idx desc);

insert into jrate(r_idx, insert_date, j_star, r_content, m_email, j_idx)
values(
(select r_idx from(select rownum, a.* from jrate a order by r_idx desc) where rownum = 1 )+1,
sysdate, 2, '그냥저냥 젤리 맛이에요', 'magicofclown@naver.com', 4739
);
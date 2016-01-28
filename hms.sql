/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2016/1/27 23:00:06                           */
/*==============================================================*/


drop table if exists admin;

drop table if exists carousel_manage;

drop table if exists company_info;

drop table if exists customer;

drop table if exists gallery;

drop table if exists gallery_detail;

drop table if exists message;

drop table if exists news;

drop table if exists order_detail;

drop table if exists orders;

drop table if exists product;

drop table if exists theme;

/*==============================================================*/
/* Table: admin                                                 */
/*==============================================================*/
create table admin
(
   a_id                 int not null,
   a_name               varchar(20),
   a_pwd                varchar(20),
   a_thumb              varchar(500),
   a_loginIP            varchar(20),
   a_loginTimes         int,
   a_email              varchar(20),
   a_phone              varchar(15),
   a_rank               int,
   a_isDel              bool,
   primary key (a_id)
);

/*==============================================================*/
/* Table: carousel_manage                                       */
/*==============================================================*/
create table carousel_manage
(
   cm_id                int not null auto_increment,
   a_id                 int,
   cm_img               varchar(50),
   cm_link              varchar(50),
   cm_updateTime        datetime,
   cm_rank              int,
   cm_isDel             bool,
   primary key (cm_id)
);

/*==============================================================*/
/* Table: company_info                                          */
/*==============================================================*/
create table company_info
(
   ci_id                int not null auto_increment,
   a_id                 int,
   t_id                 int,
   ci_name              varchar(50),
   ci_logo              varchar(50),
   ci_net               varchar(50),
   ci_intro             varchar(5000),
   ci_tel               varchar(20),
   ci_email             varchar(20),
   ci_updateTime        datetime,
   primary key (ci_id)
);

/*==============================================================*/
/* Table: customer                                              */
/*==============================================================*/
create table customer
(
   c_id                 int not null auto_increment,
   c_name               varchar(20),
   c_IDcard             varchar(20),
   c_sex                varchar(10),
   c_phone              varchar(15),
   c_address            varchar(50),
   c_rank               varchar(10),
   c_isDel              bool,
   primary key (c_id)
);

/*==============================================================*/
/* Table: gallery                                               */
/*==============================================================*/
create table gallery
(
   g_id                 int not null auto_increment,
   a_id                 int,
   g_name               varchar(30),
   g_img                varchar(50),
   g_info               varchar(1000),
   g_rank               int,
   g_isDel              bool,
   g_time               datetime,
   primary key (g_id)
);

/*==============================================================*/
/* Table: gallery_detail                                        */
/*==============================================================*/
create table gallery_detail
(
   gd_id                int not null auto_increment,
   p_id                 int,
   g_id                 int,
   gd_isDel             bool,
   primary key (gd_id)
);

/*==============================================================*/
/* Table: message                                               */
/*==============================================================*/
create table message
(
   m_id                 int not null auto_increment,
   a_id                 int,
   m_content            varchar(500),
   m_email              varchar(20),
   m_phone              varchar(15),
   m_upTime             datetime,
   m_operateTime        datetime,
   m_isread             bool,
   m_rank               int,
   m_isDel              bool,
   primary key (m_id)
);

/*==============================================================*/
/* Table: news                                                  */
/*==============================================================*/
create table news
(
   n_id                 int not null auto_increment,
   a_id                 int,
   n_title              varchar(200),
   n_thumb              varchar(50),
   n_content            varchar(5000),
   n_upTime             datetime,
   n_rank               int,
   n_isDel              bool,
   primary key (n_id)
);

/*==============================================================*/
/* Table: order_detail                                          */
/*==============================================================*/
create table order_detail
(
   od_id                int not null auto_increment,
   p_id                 int,
   o_id                 int,
   od_num               int,
   od_price             decimal,
   od_isDel             bool,
   primary key (od_id)
);

/*==============================================================*/
/* Table: orders                                                */
/*==============================================================*/
create table orders
(
   o_id                 int not null auto_increment,
   c_id                 int,
   a_id                 int,
   o_upTime             datetime,
   o_total              decimal,
   o_isPay              bool,
   o_rank               int,
   o_isDel              bool,
   o_operateTime        datetime,
   primary key (o_id)
);

/*==============================================================*/
/* Table: product                                               */
/*==============================================================*/
create table product
(
   p_id                 int not null auto_increment,
   a_id                 int,
   p_name               varchar(100),
   p_img                varchar(1000),
   p_intro              varchar(5000),
   p_price              decimal,
   p_time               datetime,
   p_rank               int,
   p_isDel              bool,
   primary key (p_id)
);

/*==============================================================*/
/* Table: theme                                                 */
/*==============================================================*/
create table theme
(
   t_id                 int not null auto_increment,
   t_name               varchar(50),
   t_code               varchar(20),
   t_rank               int,
   t_isDel              bool,
   primary key (t_id)
);

alter table carousel_manage add constraint FK_Reference_14 foreign key (a_id)
      references admin (a_id) on delete restrict on update restrict;

alter table company_info add constraint FK_Reference_15 foreign key (a_id)
      references admin (a_id) on delete restrict on update restrict;

alter table company_info add constraint FK_Reference_8 foreign key (t_id)
      references theme (t_id) on delete restrict on update restrict;

alter table gallery add constraint FK_Reference_11 foreign key (a_id)
      references admin (a_id) on delete restrict on update restrict;

alter table gallery_detail add constraint FK_Reference_10 foreign key (g_id)
      references gallery (g_id) on delete restrict on update restrict;

alter table gallery_detail add constraint FK_Reference_9 foreign key (p_id)
      references product (p_id) on delete restrict on update restrict;

alter table message add constraint FK_Reference_13 foreign key (a_id)
      references admin (a_id) on delete restrict on update restrict;

alter table news add constraint FK_Reference_4 foreign key (a_id)
      references admin (a_id) on delete restrict on update restrict;

alter table order_detail add constraint FK_Reference_6 foreign key (p_id)
      references product (p_id) on delete restrict on update restrict;

alter table order_detail add constraint FK_Reference_7 foreign key (o_id)
      references orders (o_id) on delete restrict on update restrict;

alter table orders add constraint FK_Reference_16 foreign key (a_id)
      references admin (a_id) on delete restrict on update restrict;

alter table orders add constraint FK_Reference_2 foreign key (c_id)
      references customer (c_id) on delete restrict on update restrict;

alter table product add constraint FK_Reference_12 foreign key (a_id)
      references admin (a_id) on delete restrict on update restrict;


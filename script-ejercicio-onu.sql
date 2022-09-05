/*==============================================================*/
/* DBMS name:      PostgreSQL 8                                 */
/* Created on:     4/9/2022 08:07:00 p.�m.                      */
/*==============================================================*/


-- drop table FRONTERA;

-- drop table PAIS;

-- drop table REGION;

/*==============================================================*/
/* Table: FRONTERA                                              */
/*==============================================================*/
create table FRONTERA (
   CODIGOPAISFRONTERA   INT4                 not null,
   CODIGOPAISORIGEN     INT4                 not null,
   constraint PK_FRONTERA primary key (CODIGOPAISFRONTERA, CODIGOPAISORIGEN)
);

/*==============================================================*/
/* Table: PAIS                                                  */
/*==============================================================*/
create table PAIS (
   CODIGOPAIS           SERIAL                 not null,
   CODIGOREGION         INT4                 null,
   NOMBREPAIS           CHAR(25)             not null,
   POBLACION            INT4                 null,
   CAPITAL              CHAR(25)             null,
   MONEDA               CHAR(15)             null,
   IDIOMA               CHAR(15)             null,
   constraint PK_PAIS primary key (CODIGOPAIS)
);

/*==============================================================*/
/* Table: REGION                                                */
/*==============================================================*/
create table REGION (
   CODIGOREGION         SERIAL	    not null,
   NOMBREREGION         CHAR(25)             not null,
   constraint PK_REGION primary key (CODIGOREGION)
);

alter table FRONTERA
   add constraint FK_FRONTERA_FRONTERA_PAIS foreign key (CODIGOPAISFRONTERA)
      references PAIS (CODIGOPAIS)
      on delete restrict on update restrict;

alter table FRONTERA
   add constraint FK_FRONTERA_ORIGEN_PAIS foreign key (CODIGOPAISORIGEN)
      references PAIS (CODIGOPAIS)
      on delete restrict on update restrict;

alter table PAIS
   add constraint FK_PAIS_TIENE_REGION foreign key (CODIGOREGION)
      references REGION (CODIGOREGION)
      on delete restrict on update restrict;
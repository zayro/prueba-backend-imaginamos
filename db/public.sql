/*
 Navicat Premium Data Transfer

 Source Server         : postgresql_localhost
 Source Server Type    : PostgreSQL
 Source Server Version : 120003
 Source Host           : localhost:5432
 Source Catalog        : imaginemos
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 120003
 File Encoding         : 65001

 Date: 20/06/2020 18:36:01
*/


-- ----------------------------
-- Table structure for cliente
-- ----------------------------
DROP TABLE IF EXISTS "public"."cliente";
CREATE TABLE "public"."cliente" (
  "id_cliente" int2 NOT NULL,
  "nombre" varchar(255) COLLATE "pg_catalog"."default",
  "identificacion" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of cliente
-- ----------------------------
INSERT INTO "public"."cliente" VALUES (1, 'pepito', '102003');
INSERT INTO "public"."cliente" VALUES (2, 'marlon', '102030');

-- ----------------------------
-- Table structure for servicio_calificacion
-- ----------------------------
DROP TABLE IF EXISTS "public"."servicio_calificacion";
CREATE TABLE "public"."servicio_calificacion" (
  "id_servicio_calificacion" int2 NOT NULL,
  "calificacion" int2,
  "id_servicio_solicitud" int2
)
;

-- ----------------------------
-- Records of servicio_calificacion
-- ----------------------------
INSERT INTO "public"."servicio_calificacion" VALUES (1, NULL, 37);
INSERT INTO "public"."servicio_calificacion" VALUES (2, NULL, 38);
INSERT INTO "public"."servicio_calificacion" VALUES (3, NULL, 39);
INSERT INTO "public"."servicio_calificacion" VALUES (4, NULL, 40);
INSERT INTO "public"."servicio_calificacion" VALUES (5, NULL, 41);
INSERT INTO "public"."servicio_calificacion" VALUES (6, NULL, 42);
INSERT INTO "public"."servicio_calificacion" VALUES (7, NULL, 43);
INSERT INTO "public"."servicio_calificacion" VALUES (8, NULL, 44);
INSERT INTO "public"."servicio_calificacion" VALUES (9, NULL, 45);
INSERT INTO "public"."servicio_calificacion" VALUES (10, NULL, 46);
INSERT INTO "public"."servicio_calificacion" VALUES (11, NULL, 47);

-- ----------------------------
-- Table structure for servicio_seguimiento
-- ----------------------------
DROP TABLE IF EXISTS "public"."servicio_seguimiento";
CREATE TABLE "public"."servicio_seguimiento" (
  "id_servicio_seguimiento" int2 NOT NULL,
  "estado" varchar COLLATE "pg_catalog"."default",
  "id_servicio_solicitud" int2
)
;

-- ----------------------------
-- Records of servicio_seguimiento
-- ----------------------------
INSERT INTO "public"."servicio_seguimiento" VALUES (1, 'inicial', 34);
INSERT INTO "public"."servicio_seguimiento" VALUES (2, 'inicial', 35);
INSERT INTO "public"."servicio_seguimiento" VALUES (3, 'inicial', 37);
INSERT INTO "public"."servicio_seguimiento" VALUES (4, 'inicial', 38);
INSERT INTO "public"."servicio_seguimiento" VALUES (5, 'inicial', 39);
INSERT INTO "public"."servicio_seguimiento" VALUES (6, 'inicial', 40);
INSERT INTO "public"."servicio_seguimiento" VALUES (7, 'inicial', 41);
INSERT INTO "public"."servicio_seguimiento" VALUES (8, 'inicial', 42);
INSERT INTO "public"."servicio_seguimiento" VALUES (9, 'inicial', 43);
INSERT INTO "public"."servicio_seguimiento" VALUES (10, 'inicial', 44);
INSERT INTO "public"."servicio_seguimiento" VALUES (11, 'inicial', 45);
INSERT INTO "public"."servicio_seguimiento" VALUES (12, 'inicial', 46);
INSERT INTO "public"."servicio_seguimiento" VALUES (13, 'inicial', 47);

-- ----------------------------
-- Table structure for servicio_solicitud
-- ----------------------------
DROP TABLE IF EXISTS "public"."servicio_solicitud";
CREATE TABLE "public"."servicio_solicitud" (
  "id_servicio_solicitud" int2 NOT NULL,
  "id_cliente" int2 NOT NULL
)
;

-- ----------------------------
-- Records of servicio_solicitud
-- ----------------------------
INSERT INTO "public"."servicio_solicitud" VALUES (10, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (11, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (12, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (13, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (14, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (15, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (16, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (17, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (18, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (19, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (20, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (21, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (22, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (23, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (24, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (25, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (26, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (27, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (28, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (29, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (30, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (31, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (32, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (33, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (34, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (35, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (36, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (37, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (38, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (39, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (40, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (41, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (42, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (43, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (44, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (45, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (46, 1);
INSERT INTO "public"."servicio_solicitud" VALUES (47, 1);

-- ----------------------------
-- Table structure for servicio_ticket
-- ----------------------------
DROP TABLE IF EXISTS "public"."servicio_ticket";
CREATE TABLE "public"."servicio_ticket" (
  "id_servicio_ticket" int2 NOT NULL,
  "id_servicio_solicitud" int2,
  "id_tecnico" int2
)
;

-- ----------------------------
-- Records of servicio_ticket
-- ----------------------------
INSERT INTO "public"."servicio_ticket" VALUES (1, 17, 1);
INSERT INTO "public"."servicio_ticket" VALUES (2, 19, 1);
INSERT INTO "public"."servicio_ticket" VALUES (3, 20, 1);
INSERT INTO "public"."servicio_ticket" VALUES (4, 27, NULL);
INSERT INTO "public"."servicio_ticket" VALUES (5, 28, NULL);
INSERT INTO "public"."servicio_ticket" VALUES (6, 29, NULL);
INSERT INTO "public"."servicio_ticket" VALUES (7, 31, NULL);
INSERT INTO "public"."servicio_ticket" VALUES (8, 32, 2);
INSERT INTO "public"."servicio_ticket" VALUES (9, 33, 2);
INSERT INTO "public"."servicio_ticket" VALUES (10, 34, 3);
INSERT INTO "public"."servicio_ticket" VALUES (11, 35, 3);
INSERT INTO "public"."servicio_ticket" VALUES (12, 36, 1);
INSERT INTO "public"."servicio_ticket" VALUES (13, 37, 2);
INSERT INTO "public"."servicio_ticket" VALUES (14, 38, 1);
INSERT INTO "public"."servicio_ticket" VALUES (15, 39, 3);
INSERT INTO "public"."servicio_ticket" VALUES (16, 40, 2);
INSERT INTO "public"."servicio_ticket" VALUES (17, 41, 3);
INSERT INTO "public"."servicio_ticket" VALUES (18, 42, 2);
INSERT INTO "public"."servicio_ticket" VALUES (19, 43, 2);
INSERT INTO "public"."servicio_ticket" VALUES (20, 44, 1);
INSERT INTO "public"."servicio_ticket" VALUES (21, 45, 2);
INSERT INTO "public"."servicio_ticket" VALUES (22, 46, 2);
INSERT INTO "public"."servicio_ticket" VALUES (23, 47, 2);

-- ----------------------------
-- Table structure for tecnico
-- ----------------------------
DROP TABLE IF EXISTS "public"."tecnico";
CREATE TABLE "public"."tecnico" (
  "id_tecnico" int2 NOT NULL,
  "nombre" varchar COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of tecnico
-- ----------------------------
INSERT INTO "public"."tecnico" VALUES (1, 'tec1');
INSERT INTO "public"."tecnico" VALUES (2, 'tec2');
INSERT INTO "public"."tecnico" VALUES (3, 'tec3');

-- ----------------------------
-- View structure for ticket_soporte
-- ----------------------------
DROP VIEW IF EXISTS "public"."ticket_soporte";
CREATE VIEW "public"."ticket_soporte" AS  SELECT cliente.id_cliente,
    cliente.nombre AS cliente,
    tecnico.id_tecnico,
    tecnico.nombre AS tecnico,
    servicio_seguimiento.estado,
    servicio_calificacion.calificacion,
    servicio_solicitud.id_servicio_solicitud,
    concat('http://localhost/calificacion/', servicio_solicitud.id_servicio_solicitud) AS calificar_servicio,
    concat('http://localhost/seguimiento/', servicio_solicitud.id_servicio_solicitud) AS seguimiento_servicio
   FROM (((((servicio_solicitud
     JOIN cliente ON ((servicio_solicitud.id_cliente = cliente.id_cliente)))
     JOIN servicio_calificacion ON ((servicio_solicitud.id_servicio_solicitud = servicio_calificacion.id_servicio_solicitud)))
     JOIN servicio_seguimiento ON ((servicio_solicitud.id_servicio_solicitud = servicio_seguimiento.id_servicio_solicitud)))
     JOIN servicio_ticket ON ((servicio_solicitud.id_servicio_solicitud = servicio_ticket.id_servicio_solicitud)))
     JOIN tecnico ON ((servicio_ticket.id_tecnico = tecnico.id_tecnico)));

-- ----------------------------
-- Primary Key structure for table cliente
-- ----------------------------
ALTER TABLE "public"."cliente" ADD CONSTRAINT "cliente_pkey" PRIMARY KEY ("id_cliente");

-- ----------------------------
-- Primary Key structure for table servicio_calificacion
-- ----------------------------
ALTER TABLE "public"."servicio_calificacion" ADD CONSTRAINT "servicio_calificacion_pkey" PRIMARY KEY ("id_servicio_calificacion");

-- ----------------------------
-- Primary Key structure for table servicio_seguimiento
-- ----------------------------
ALTER TABLE "public"."servicio_seguimiento" ADD CONSTRAINT "servicio_seguimiento_pk" PRIMARY KEY ("id_servicio_seguimiento");

-- ----------------------------
-- Indexes structure for table servicio_solicitud
-- ----------------------------
CREATE INDEX "servicio_solicitud_id_cliente_idx" ON "public"."servicio_solicitud" USING btree (
  "id_cliente" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "servicio_solicitud_id_servicio_solicitud_idx" ON "public"."servicio_solicitud" USING btree (
  "id_servicio_solicitud" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- ----------------------------
-- Uniques structure for table servicio_solicitud
-- ----------------------------
ALTER TABLE "public"."servicio_solicitud" ADD CONSTRAINT "servicio_solicitud_un" UNIQUE ("id_servicio_solicitud");

-- ----------------------------
-- Primary Key structure for table servicio_solicitud
-- ----------------------------
ALTER TABLE "public"."servicio_solicitud" ADD CONSTRAINT "servicio_solicitud_pk" PRIMARY KEY ("id_servicio_solicitud");

-- ----------------------------
-- Indexes structure for table servicio_ticket
-- ----------------------------
CREATE INDEX "servicio_ticket_id_servicio_ticket_idx" ON "public"."servicio_ticket" USING btree (
  "id_servicio_ticket" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table servicio_ticket
-- ----------------------------
ALTER TABLE "public"."servicio_ticket" ADD CONSTRAINT "servicio_ticket_pkey" PRIMARY KEY ("id_servicio_ticket");

-- ----------------------------
-- Primary Key structure for table tecnico
-- ----------------------------
ALTER TABLE "public"."tecnico" ADD CONSTRAINT "tecnico_pkey" PRIMARY KEY ("id_tecnico");

-- ----------------------------
-- Foreign Keys structure for table servicio_calificacion
-- ----------------------------
ALTER TABLE "public"."servicio_calificacion" ADD CONSTRAINT "servicio_calificacion_id_servicio_solicitud_fkey" FOREIGN KEY ("id_servicio_solicitud") REFERENCES "public"."servicio_solicitud" ("id_servicio_solicitud") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table servicio_seguimiento
-- ----------------------------
ALTER TABLE "public"."servicio_seguimiento" ADD CONSTRAINT "servicio_seguimiento_id_servicio_solicitud_fkey" FOREIGN KEY ("id_servicio_solicitud") REFERENCES "public"."servicio_solicitud" ("id_servicio_solicitud") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table servicio_solicitud
-- ----------------------------
ALTER TABLE "public"."servicio_solicitud" ADD CONSTRAINT "servicio_solicitud_fk" FOREIGN KEY ("id_cliente") REFERENCES "public"."cliente" ("id_cliente") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- ----------------------------
-- Foreign Keys structure for table servicio_ticket
-- ----------------------------
ALTER TABLE "public"."servicio_ticket" ADD CONSTRAINT "servicio_ticket_id_servicio_solicitud_fkey" FOREIGN KEY ("id_servicio_solicitud") REFERENCES "public"."servicio_solicitud" ("id_servicio_solicitud") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."servicio_ticket" ADD CONSTRAINT "servicio_ticket_id_tecnico_fkey" FOREIGN KEY ("id_tecnico") REFERENCES "public"."tecnico" ("id_tecnico") ON DELETE NO ACTION ON UPDATE NO ACTION;

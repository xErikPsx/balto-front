import React from 'react';
import { Form, Input, Row, Col, Select, Checkbox, Button, Radio } from 'antd';
import { FrownOutlined, SmileOutlined, MehOutlined } from '@ant-design/icons';

const colPadding = { padding: '6px 6px' };

const { Option } = Select;

//Breakpoints inputs
const bkp = {
  xs: 12,
  sm: 12,
  lg: 8,
  xxl: 6
};

//Breakpoint titles
const bkpT = {
  xs: 24,
  sm: 24
};

export default function FormPatientsPage() {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <div className="form-patients">
        <h2 className="form-patients__title">Ingresar nuevo paciente</h2>
        <Form
          // {...formItemLayout}
          layout="vertical"
          form={form}
          name="formPatients"
          onFinish={onFinish}
          // initialValues={}
          scrollToFirstError
        >
          <Row className="form-patients--shadow">
            {/* <Col xs={10} sm={bkp.sm} lg={bkp.lg} xxl={bkp.xxl}>
              Upload a picture of the patient
              <PhotoUpload title="Fotografía del cliente" />
            </Col> */}
            <Col xs={24} sm={24}>
              <h3 className="form-patients__subtitle">Datos generales</h3>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPadding}
            >
              <Form.Item
                colon={true}
                className="form-patients--remove-row-mb"
                name="nombre"
                label="Nombre(s):"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa un nombre!',
                    whitespace: true
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPadding}
            >
              <Form.Item
                colon={true}
                className="form-patients--remove-row-mb"
                name="apellidos"
                label="Apellidos:"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa los apellidos!',
                    whitespace: true
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPadding}
            >
              <Form.Item
                colon={true}
                className="form-patients--remove-row-mb"
                name="edad"
                label="Edad:"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa la edad!',
                    whitespace: true
                  }
                ]}
              >
                <Input maxLength={3} />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPadding}
            >
              <Form.Item
                colon={true}
                className="form-patients--remove-row-mb"
                name="genero"
                label="Género"
                hasFeedback
                rules={[
                  { required: true, message: 'Por favor, ingresa el género!' }
                ]}
              >
                <Select placeholder="Género">
                  <Option value="masculino">Masculino</Option>
                  <Option value="femenino">Femenino</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPadding}
            >
              <Form.Item
                colon={true}
                className="form-patients--remove-row-mb"
                name="ciudad"
                label="Ciudad:"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa la ciudad!',
                    whitespace: true
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row className="form-patients--shadow">
            <Col xs={bkpT.xs} sm={bkpT.sm} style={colPadding}>
              <h3 className="form-patients__subtitle">Datos de contacto</h3>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPadding}
            >
              <Form.Item
                colon={true}
                className="form-patients--remove-row-mb"
                name="telefono"
                label="Teléfono:"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa un número de teléfono!',
                    whitespace: true
                  }
                ]}
              >
                <Input maxLength={10} />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPadding}
            >
              <Form.Item
                colon={true}
                className="form-patients--remove-row-mb"
                name="direccion"
                label="Dirección:"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa la dirección!',
                    whitespace: true
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPadding}
            >
              <Form.Item
                colon={true}
                className="form-patients--remove-row-mb"
                name="telefonoFamiliar"
                label="Teléfono de familiar:"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa el telefono de un familiar!'
                  }
                ]}
              >
                <Input maxLength={10} />
              </Form.Item>
            </Col>
          </Row>

          <Row className="form-patients--shadow">
            <Col xs={bkpT.xs} sm={bkpT.sm} style={colPadding}>
              <h3 className="form-patients__subtitle">Datos médicos</h3>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPadding}
            >
              <Form.Item
                colon={true}
                className="form-patients--remove-row-mb"
                name="seguroSocial"
                label="Seguro Social:"
                rules={[
                  {
                    required: true,
                    message: 'Por favor, ingresa el seguro social!',
                    whitespace: true
                  }
                ]}
              >
                <Input maxLength={11} />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPadding}
            >
              <Form.Item
                colon={true}
                className="form-patients--remove-row-mb"
                name="peso"
                label="Peso:"
              >
                <Input type="number" suffix="kg" />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPadding}
            >
              <Form.Item
                colon={true}
                className="form-patients--remove-row-mb"
                name="estatura"
                label="Estatura:"
              >
                <Input type="number" suffix="m" />
              </Form.Item>
            </Col>
            <Col
              xs={bkp.xs}
              sm={bkp.sm}
              lg={bkp.lg}
              xxl={bkp.xxl}
              style={colPadding}
            >
              <Form.Item
                colon={true}
                className="form-patients--remove-row-mb"
                name="tipoSangre"
                label="Tipo de sangre:"
                hasFeedback
              >
                <Select placeholder="Tipo de sangre">
                  <Option value="O-">O-</Option>
                  <Option value="O+">O+</Option>
                  <Option value="A-">A-</Option>
                  <Option value="A+">A+</Option>
                  <Option value="B-">B-</Option>
                  <Option value="B+">B+</Option>
                  <Option value="AB-">AB-</Option>
                  <Option value="AB+">AB+</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={bkpT.xs} sm={bkpT.sm} lg={16} style={colPadding}>
              <Form.Item
                colon={true}
                className="form-patients--remove-row-mb"
                name="alergias"
                label="Alergias:"
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={bkpT.xs} sm={bkpT.sm} style={colPadding}>
              <h3 className="form-patients__subtitle">Síntomas</h3>
            </Col>
            <Col xs={24} sm={24} style={colPadding}>
              <Form.Item colon={true} name="sintomas">
                <Checkbox.Group>
                  <Row>
                    <Col
                      xs={bkp.xs}
                      sm={bkp.sm}
                      lg={bkp.lg}
                      xxl={bkp.xxl}
                      style={colPadding}
                    >
                      <Checkbox
                        value="Fiebre"
                        className="form-patients--symptomsCheckbox"
                      >
                        Fiebre
                      </Checkbox>
                    </Col>
                    <Col
                      xs={24}
                      sm={bkp.sm}
                      lg={bkp.lg}
                      xxl={bkp.xxl}
                      style={colPadding}
                    >
                      <Checkbox
                        value="Congestion nasal"
                        className="form-patients--symptomsCheckbox"
                      >
                        Congestion nasal
                      </Checkbox>
                    </Col>
                    <Col
                      xs={24}
                      sm={bkp.sm}
                      lg={bkp.lg}
                      xxl={bkp.xxl}
                      style={colPadding}
                    >
                      <Checkbox
                        value="Dolor de garganta"
                        className="form-patients--symptomsCheckbox"
                      >
                        Dolor de garganta
                      </Checkbox>
                    </Col>
                    <Col
                      xs={24}
                      sm={bkp.sm}
                      lg={bkp.lg}
                      xxl={bkp.xxl}
                      style={colPadding}
                    >
                      <Checkbox
                        value="Secreción nasal"
                        className="form-patients--symptomsCheckbox"
                      >
                        Secreción nasal
                      </Checkbox>
                    </Col>
                    <Col
                      xs={24}
                      sm={bkp.sm}
                      lg={bkp.lg}
                      xxl={bkp.xxl}
                      style={colPadding}
                    >
                      <Checkbox
                        value="Dificultad para respirar"
                        className="form-patients--symptomsCheckbox"
                      >
                        Dificultad para respirar
                      </Checkbox>
                    </Col>
                    <Col
                      xs={24}
                      sm={bkp.sm}
                      lg={bkp.lg}
                      xxl={bkp.xxl}
                      style={colPadding}
                    >
                      <Checkbox
                        value="Fatiga"
                        className="form-patients--symptomsCheckbox"
                      >
                        Fatiga
                      </Checkbox>
                    </Col>
                    <Col
                      xs={24}
                      sm={bkp.sm}
                      lg={bkp.lg}
                      xxl={bkp.xxl}
                      style={colPadding}
                    >
                      <Checkbox
                        value="Dolor de cabeza"
                        className="form-patients--symptomsCheckbox"
                      >
                        Dolor de cabeza
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Col>
          </Row>

          <Row className="form-patients--shadow">
            <Col xs={24} sm={12} style={colPadding}>
              <h3 className="form-patients__subtitle">Estado Actual</h3>
              <div className="form-patients__estadoWrapper">
                <Form.Item
                  colon={true}
                  name="estadoActual"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor, ingresa el estado!',
                      whitespace: true
                    }
                  ]}
                >
                  <Radio.Group>
                    <Radio.Button value="empeorando">
                      <div>
                        <FrownOutlined className="form-patients__estado-icono" />
                        <h4>Empeorando</h4>
                      </div>
                    </Radio.Button>
                    <Radio.Button value="estable">
                      <div>
                        <MehOutlined className="form-patients__estado-icono" />
                        <h4>Estable</h4>
                      </div>
                    </Radio.Button>
                    <Radio.Button
                      value="mejorando"
                      className="form-patients__rdb--deleteOutline"
                    >
                      <div>
                        <SmileOutlined className="form-patients__estado-icono" />
                        <h4>Mejorando</h4>
                      </div>
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </div>
            </Col>

            <Col xs={24} sm={12} style={colPadding}>
              <h3 className="form-patients__subtitle">Observaciones</h3>
              <Form.Item
                colon={true}
                className="form-patients--remove-row-mb"
                name="Observaciones"
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button className="form-patients__cancelBtn">Cancelar</Button>
            <Button
              type="primary"
              htmlType="submit"
              className="form-patients__registrarBtn"
            >
              Registrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

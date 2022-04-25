import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  useTab,
  useMultiStyleConfig,
  Button,
  Box,
  Heading,
  Grid,
  Text,
} from '@chakra-ui/react';
import SecondImages1 from './SecondImages1';
import SecondImages2 from './SecondImages2';
import SecondImages3 from './SecondImages3';
import SecondImages4 from './SecondImages4';

export default function CustomTabs() {
  const CustomTab = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps['aria-selected'];

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig('Tabs', tabProps);

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as="span" mr="2">
          {isSelected ? '😎' : '😐'}
        </Box>
        {tabProps.children}
      </Button>
    );
  });

  return (
    <Box mb="10">
      <Box align="center">
        <Heading mb="5">Услуги</Heading>
      </Box>
      <Box w="100%" pl="10%" pr="10%">
        <Tabs>
          <TabList>
            <CustomTab mr="20">
              <Heading as="h3" size="1xl">
                РАЗРАБОТКА ПРОДУКТА
              </Heading>
            </CustomTab>
            <CustomTab mr="20">
              <Heading as="h3" size="1xl">
                ПРОТОТИПЫ И ТЕСТИРОВАНИЕ
              </Heading>
            </CustomTab>
            <CustomTab mr="20">
              <Heading as="h3" size="1xl">
                ПРОИЗВОДСТВО И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ
              </Heading>
            </CustomTab>
            <CustomTab>
              <Heading as="h3" size="1xl">
                ОДОБРЕНИЯ АГЕНТСТВА
              </Heading>
            </CustomTab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box mt="5">
                <Grid templateColumns="repeat(2, 1fr)" gap={6} w="100%">
                  <Box maxWidth="700px">
                    {/*<Image src={production1} w="100%" />*/}
                    <SecondImages1 />
                  </Box>
                  <Box>
                    <Heading as="h3" size="1xl">
                      РАЗРАБОТКА ПРОДУКТА
                    </Heading>
                    <Text textAlign="justify" width="100%">
                      Обладая более чем 40-летним опытом проектирования и
                      разработки электроники, Divelbiss Engineering обладает
                      опытом и историей разработки успешных продуктов, которые
                      дают своим клиентам технологическое, экономичное и
                      функционально ориентированное преимущество на своем рынке.
                      Divelbiss имеет сертификат ISO-9001:2015 с сертификатом
                      Design. От концепции до окончательной поставки Divelbiss
                      Engineering работает с вами над разработкой подробных
                      спецификаций, оценкой рентабельных, актуальных технологий
                      и предоставлением комплексного решения. Наши инженеры
                      имеют опыт проектирования электроники/электротехники,
                      проектирования и компоновки печатных плат, проектирования
                      корпусов изделий (2D/3D), а также полной разработки
                      программного обеспечения, включая разработку приложений
                      для ПК и встроенного программного обеспечения. От простой
                      конструкции печатной платы до полных сложных систем,
                      Divelbiss — ваш универсальный поставщик.
                    </Text>
                  </Box>
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box mt="5">
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  <Box maxWidth="700px">
                    <SecondImages2 />
                    {/*<Image src={prototyping1} w="100%" />*/}
                  </Box>
                  <Box>
                    <Heading as="h3" size="1xl">
                      ПРОТОТИПЫ И ТЕСТИРОВАНИЕ
                    </Heading>
                    <Text textAlign="justify" width="100%">
                      Обладая более чем 40-летним опытом разработки и
                      производства, Divelbiss понимает важность создания
                      прототипа и тестирования продукта для проверки
                      функциональности и качества любого проекта. Прототипы
                      Divelbiss включают в себя SMT и сборку печатных плат со
                      сквозными отверстиями, механическую сборку, подсборки,
                      полные системы, блоки управления и полные проводные
                      панели. Тестирование на соответствие важно для проверки
                      конструкции, и компания Divelbiss предоставляет услуги по
                      тестированию для экологических испытаний, испытаний на
                      электромагнитную совместимость и испытаний на переходные
                      процессы.
                    </Text>
                  </Box>
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box mt="5">
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  <Box maxWidth="700px">
                    <SecondImages3 />
                    {/*<Image src={mfg5} w="100%" />*/}
                  </Box>
                  <Box>
                    <Heading as="h3" size="1xl">
                      ПРОИЗВОДСТВО И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ
                    </Heading>
                    <Text textAlign="justify" width="100%">
                      Нужна ли вам сборка электронных печатных плат (PCB),
                      подсборка или полная сборка продукта, у Divelbiss
                      Manufacturing есть возможности и опыт, чтобы удовлетворить
                      ваши потребности. Наши возможности включают в себя сборку
                      печатных плат, сборочные узлы, жгуты проводов и кабели,
                      блоки управления и панели, а также системы «под ключ».
                      Divelbiss производит сборки, не соответствующие
                      требованиям RoHS и RoHS, в соответствии со стандартами
                      IPCA-610B, и мы сертифицированы по стандарту ISO-9001:
                      2015 с дизайном.
                    </Text>
                  </Box>
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box mt="5">
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  <Box maxWidth="700px">
                    <SecondImages4 />
                    {/*<Image src={approvals3} w="100%" />*/}
                  </Box>
                  <Box>
                    <Heading as="h3" size="1xl">
                      ОДОБРЕНИЯ АГЕНТСТВА
                    </Heading>
                    <Text textAlign="justify" width="100%">
                      Divelbiss понимает всю сложность современных рынков. Если
                      вы обнаружите, что ваш рынок требует одобрения агентства,
                      такого как UL или CSA, и это лишь некоторые из них, мы
                      здесь, чтобы помочь вам получить одобрение для вашего
                      продукта. Наши инженеры работают с вами и агентством,
                      чтобы определить соответствующую классификацию и стандарт
                      тестирования. Они помогают на каждом этапе процесса
                      сертификации продукции.
                    </Text>
                  </Box>
                </Grid>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

import {
  Animated,
  Dimensions,
  Easing,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Button from './Button/Button';
import {colors} from '../Utils/Colors';

const {width, height} = Dimensions.get('window');
const data = [
  {
    image: require('../assets/images/pic1.png'),
    type: 'image',
    isFinish: 0,
    title: 'القراءات اليومية',
    description:
      '.تقدم لنا الكنيسة القبطية الأرثوذكسية يومياً من خلال القراءات الكنسية تعليم روحي ثري. الترتيب البديع لهذا القراءات يعطي فكراً روحياً لاهوتياً واضحاً ومستقيماً',
  },
  {
    image: require('../assets/images/pic2.png'),
    type: 'image',
    isFinish: 0,
    title: 'الخــــدامات الكـــنســـية',
    description:
      'الخدمة هى تعبير عملى عن محبتنا لله ولأخوتنا فى الإنسانية .. انها محبة لله تملأ قلب المؤمن ويريد ان يشترك الاخرين معه فى هذه المحبة',
  },
  {
    image: require('../assets/images/pic3.png'),
    type: 'image',
    isFinish: 0,
    title: 'العهد الجديد و القديم',
    description:
      'كنيستنا الحلوة دى هى كنيسة الشهداء دايمًا ثابتة وقوية أمام كل الأعداء ياما كتير ظلموها ياما كتير اضطهدوها',
  },
];

const ImageCarousal = () => {
  const arr = [
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];

  data.map((_item, index) => {
    data[index].opacity = arr[index];
  });

  const [content, setContent] = useState(data);
  const [current, setCurrent] = useState(0);
  const navigation = useNavigation();
  const progress = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef(null);
  const textOpacity = useRef(new Animated.Value(1)).current;

  const start = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(({finished}) => {
      if (finished) {
        next();
        if (current < content.length - 1) {
          txtAnimation();
        }
      }
    });
  };
  const txtAnimation = () => {
    Animated.parallel([
      Animated.timing(content[current].opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(content[current + 1]?.opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const txtStart = () => {
    setTimeout(() => {
      Animated.timing(textOpacity, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }).start(({finished}) => {
        if (finished) {
          txtFinish();
        }
      });
    }, 2000);
  };
  const txtFinish = () => {
    Animated.timing(textOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(({finished}) => {
      console.log('xxxxxxxxxx');
      if (finished) {
      }
    });
  };

  useEffect(() => {
    start();
    if (current != content.length - 1) {
      txtStart();
    }
  }, [current]);

  const close = () => {
    progress.setValue(0);
    navigation.goBack();
  };

  const prev = () => {
    if (current > 0) {
      let newStubs = content;
      newStubs[current].isFinish = 0;
      setContent(newStubs);
      progress.setValue(0);
      setCurrent(current - 1);
      textOpacity.setValue(1);
      // textTrlanslateX.setValue(0);
      scrollRef?.current?.scrollTo({x: (current - 1) * width});
    } else {
      close();
    }
  };
  const next = () => {
    if (current !== content.length - 1) {
      let newStubs = content;
      newStubs[current].isFinish = 1;
      setContent(newStubs);
      progress.setValue(0);
      textOpacity.setValue(1);
      setCurrent(current + 1);
      // textTrlanslateX.setValue(0);
      scrollRef?.current?.scrollTo({x: (current + 1) * width});
    } else {
      // close()
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        scrollEnabled={false}>
        {content.map((item, index) => {
          return (
            <LinearGradient
              colors={['rgba(0, 0, 0,0.75)', 'rgba(0, 74, 185,0.52)']}
              style={styles.image}>
              <Image
                source={item.image}
                style={styles.image}
                onLoadEnd={() => {
                  progress.setValue(0);
                  start();
                }}
              />
            </LinearGradient>
          );
        })}
      </ScrollView>

      <View style={styles.progressBarContainer}>
        {content.map((item, index) => {
          return (
            <View style={styles.progressBar} key={index.toString()}>
              <Animated.View
                style={{
                  flex: current == index ? progress : content[index].isFinish,
                  backgroundColor: '#fff',
                  height: 5,
                  borderRadius: 10,
                }}
              />
            </View>
          );
        })}
      </View>
      {/* <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.btn} onPress={prev} />
        <TouchableOpacity style={styles.btn} onPress={next} />
      </View> */}

      <View style={styles.BottomContainer}>
        {content.map((item, index) => {
          return (
            <View
              style={{
                position: 'absolute',
                paddingTop: 22,
              }}>
              <Animated.Text
                style={[styles.titleStyle, {opacity: item.opacity}]}>
                {item.title}
              </Animated.Text>
              <Animated.Text
                style={[styles.decriptionStyle, {opacity: item.opacity}]}>
                {item.description}
              </Animated.Text>
            </View>
          );
        })}
        <View
          style={{
            top: 120,
            width: '100%',
          }}>
          <Button type={'primary'} title={'تسجيل الدخول'} />
          <Button type={'secondary'} title={'إنشاء حساب'} />
        </View>
      </View>
    </View>
  );
};

export default ImageCarousal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: width,
    height: height * 0.59,
    resizeMode: 'cover',
  },
  progressBarContainer: {
    width: width,
    position: 'absolute',
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 5,
    flexDirection: 'row',
    backgroundColor: 'rgb(117,117,117)',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  linearGradientStyle: {flex: 1},
  btnsContainer: {
    width: width,
    height: height,
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    justifyContent: 'space-between',
  },
  BottomContainer: {
    width: width,
    height: '35%',
    position: 'absolute',
    // justifyContent: 'center',
    paddingTop: 22,
    alignItems: 'center',
    bottom: 0,
    backgroundColor: colors.SECONDARY,
    paddingHorizontal: 16,
  },
  btn: {
    width: width * 0.15,
    height: '100%',
    // backgroundColor: 'red',
  },
  titleStyle: {
    fontFamily: 'Tajawal-bold',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 41.6,
    // textAlign: 'right',
    alignSelf: 'flex-end',
    color: '#333333',
  },
  decriptionStyle: {
    fontFamily: 'Tajawal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18.2,
    textAlign: 'right',
    marginTop: 12,
    alignSelf: 'flex-end',
    color: '#4F4F4F',
  },
  loginBtnStyles: {
    marginTop: 20,
  },
  registerBtnStyles: {
    marginTop: 15,
  },
});

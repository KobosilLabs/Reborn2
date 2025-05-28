import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Arc } from '@/data/habitsData';

interface HeroBannerProps {
  arc: Arc;
  dayNumber: number;
  onPrevDay: () => void;
  onNextDay: () => void;
}

export default function HeroBanner({
  arc,
  dayNumber,
  onPrevDay,
  onNextDay,
}: HeroBannerProps) {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={arc.imageUrl as ImageSourcePropType}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(15, 15, 15, 0.6)', 'transparent']}
          style={styles.gradient}
        >
          <View style={styles.content}>
            <Text style={styles.arcName}>REBORN</Text>
            <Text style={styles.arcTitle}>{arc.name}</Text>
            
            <View style={styles.dayContainer}>
              <TouchableOpacity 
                style={styles.dayArrow} 
                onPress={onPrevDay}
              >
                <ChevronLeft color="#DCDCDC" size={24} />
              </TouchableOpacity>
              
              <Text style={styles.dayText}>DAY {dayNumber}</Text>
              
              <TouchableOpacity 
                style={styles.dayArrow} 
                onPress={onNextDay}
              >
                <ChevronRight color="#DCDCDC" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 260,
    width: '100%',
    overflow: 'hidden',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    marginTop: -20, // Move content up
  },
  arcName: {
    color: '#FFFFFF',
    fontFamily: 'Rajdhani-Bold',
    fontSize: 42, // Increased from 28
    letterSpacing: 6, // Increased from 4
    marginBottom: 12,
    textShadowColor: '#FFFFFF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  arcTitle: {
    color: '#FF4E4E',
    fontFamily: 'SpaceMono-Regular',
    fontSize: 16,
    letterSpacing: 2,
    marginBottom: 24,
  },
  dayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayArrow: {
    padding: 8,
  },
  dayText: {
    color: '#DCDCDC',
    fontFamily: 'Rajdhani-Bold',
    fontSize: 24,
    marginHorizontal: 20,
    letterSpacing: 2,
  },
});
import React from 'react';

interface SkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export const Skeleton = ({ className = '', children }: SkeletonProps) => {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}>
      {children}
    </div>
  );
};

// Blog Card Skeleton
export const BlogCardSkeleton = () => {
  return (
    <div className="card h-full">
      {/* Category Badge Skeleton */}
      <div className="absolute top-4 left-4 z-10">
        <Skeleton className="w-20 h-6 rounded-full" />
      </div>

      {/* Action Buttons Skeleton */}
      <div className="absolute top-4 right-4 z-10 flex space-x-2">
        <Skeleton className="w-8 h-8 rounded-full" />
        <Skeleton className="w-8 h-8 rounded-full" />
      </div>

      {/* Content */}
      <div className="p-6 pt-16">
        {/* Author Info Skeleton */}
        <div className="flex items-center gap-3 mb-4">
          <Skeleton className="w-8 h-8 rounded-full" />
          <div className="flex-1">
            <Skeleton className="w-24 h-4 mb-2" />
            <Skeleton className="w-16 h-3" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="mb-3">
          <Skeleton className="w-full h-6 mb-2" />
          <Skeleton className="w-3/4 h-6" />
        </div>

        {/* Content Preview Skeleton */}
        <div className="mb-4 space-y-2">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-2/3 h-4" />
        </div>

        {/* Stats Skeleton */}
        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center space-x-4">
            <Skeleton className="w-16 h-4" />
            <Skeleton className="w-12 h-4" />
          </div>
          <Skeleton className="w-8 h-4" />
        </div>

        {/* Read More Skeleton */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Skeleton className="w-20 h-4" />
          <Skeleton className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

// Homepage Hero Skeleton
export const HeroSkeleton = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="relative container mx-auto px-4 py-20">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            {/* Badge Skeleton */}
            <Skeleton className="w-64 h-8 rounded-full mb-6" />
            
            {/* Title Skeleton */}
            <div className="mb-6 space-y-4">
              <Skeleton className="w-full h-16" />
              <Skeleton className="w-3/4 h-12" />
              <Skeleton className="w-1/2 h-8" />
            </div>

            {/* Subtitle Skeleton */}
            <div className="mb-8 space-y-2">
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-4/5 h-6" />
            </div>

            {/* CTA Buttons Skeleton */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Skeleton className="w-32 h-12 rounded-lg" />
              <Skeleton className="w-28 h-12 rounded-lg" />
            </div>

            {/* Stats Skeleton */}
            <div className="grid grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <Skeleton className="w-16 h-8 mx-auto mb-2" />
                  <Skeleton className="w-20 h-4 mx-auto" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image Skeleton */}
          <div className="w-full lg:w-1/2 px-4">
            <Skeleton className="w-full h-96 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature Card Skeleton
export const FeatureCardSkeleton = () => {
  return (
    <div className="card card-hover p-8 text-center">
      <Skeleton className="w-16 h-16 rounded-full mx-auto mb-6" />
      <Skeleton className="w-32 h-6 mx-auto mb-4" />
      <div className="space-y-2">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-3/4 h-4 mx-auto" />
      </div>
    </div>
  );
};

// Appbar Skeleton
export const AppbarSkeleton = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Skeleton */}
          <Skeleton className="w-32 h-8" />
          
          {/* Navigation Skeleton */}
          <div className="hidden md:flex items-center space-x-8">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="w-20 h-8" />
            ))}
          </div>

          {/* Search Bar Skeleton */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <Skeleton className="w-full h-10 rounded-lg" />
          </div>

          {/* Right Side Actions Skeleton */}
          <div className="flex items-center space-x-4">
            <Skeleton className="w-10 h-10 rounded-lg" />
            <Skeleton className="w-10 h-10 rounded-lg" />
            <Skeleton className="w-20 h-8 rounded-lg" />
            <Skeleton className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Loading Spinner
export const LoadingSpinner = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600  ${sizeClasses[size]} ${className}`}></div>
  );
};

// Page Loading Overlay
export const PageLoadingOverlay = ({ message = "Loading..." }: { message?: string }) => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <p className="text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  );
};

// Content Loading Skeleton
export const ContentSkeleton = () => {
  return (
    <div className="space-y-6">
      <Skeleton className="w-3/4 h-8" />
      <div className="space-y-2">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-2/3 h-4" />
      </div>
      <div className="space-y-2">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-4/5 h-4" />
      </div>
    </div>
  );
};

import React from 'react';
import { ArrowRight, Users, Camera, Share2, Star, Play, Upload, Globe } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
            {/* Header */}
            <header className="bg-primary text-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                                <Camera className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold font-custom">ContentHub</span>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <a href="/features" className="text-white hover:text-purple-200 transition-colors font-custom">Features</a>
                            <a href="#creators" className="text-white hover:text-purple-200 transition-colors font-custom">For Creators</a>
                            <a href="#community" className="text-white hover:text-purple-200 transition-colors font-custom">Community</a>
                            <a href="#pricing" className="text-white hover:text-purple-200 transition-colors font-custom">Pricing</a>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <button className="text-white hover:text-purple-200 transition-colors font-custom">Sign In</button>
                            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 font-custom font-semibold">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-custom">
                        Create, Share, and
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> Monetize</span>
                        <br />Your Content
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Join millions of creators sharing their stories, building communities, and earning from their passion.
                        Your creativity deserves a platform that rewards innovation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center font-custom">
                            Start Creating <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                        <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center font-custom">
                            <Play className="mr-2 w-5 h-5" /> Watch Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 1: Features */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-custom">
                            Everything You Need to Succeed
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Powerful tools and features designed to help creators build, engage, and grow their audience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Upload className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-custom">Easy Content Upload</h3>
                            <p className="text-gray-600">
                                Upload photos, videos, and stories with our intuitive drag-and-drop interface.
                                Support for all major formats and automatic optimization.
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-custom">Community Building</h3>
                            <p className="text-gray-600">
                                Connect with like-minded creators and fans. Build your community with advanced
                                engagement tools and analytics.
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Share2 className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-custom">Smart Distribution</h3>
                            <p className="text-gray-600">
                                Reach your audience across multiple platforms with our intelligent content
                                distribution and cross-posting features.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: For Creators */}
            <section id="creators" className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-custom">
                                Built for Creators, By Creators
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We understand the challenges creators face. That's why we've built a platform
                                that puts your needs first, with monetization tools, analytics, and community
                                features that actually work.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Star className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 font-custom">Multiple Revenue Streams</h4>
                                        <p className="text-gray-600">Subscriptions, tips, merchandise, and sponsored content</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Star className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 font-custom">Real-time Analytics</h4>
                                        <p className="text-gray-600">Track performance, audience growth, and earnings</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Star className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 font-custom">Creator Support</h4>
                                        <p className="text-gray-600">24/7 support and resources to help you grow</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Globe className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-custom">Join 100K+ Creators</h3>
                                    <p className="text-gray-600 mb-6">Already earning with ContentHub</p>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-purple-600 font-custom">$2.5M+</div>
                                            <div className="text-sm text-gray-600">Paid to Creators</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-purple-600 font-custom">50M+</div>
                                            <div className="text-sm text-gray-600">Content Views</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-purple-600 font-custom">99%</div>
                                            <div className="text-sm text-gray-600">Satisfaction Rate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Community */}
            <section id="community" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-custom">
                            Join a Thriving Community
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Connect with creators and fans from around the world. Share ideas, collaborate,
                            and grow together in our supportive community.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Community Feature Cards */}
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-custom">Creator Collaborations</h3>
                            <p className="text-gray-600 mb-4">
                                Partner with other creators for cross-promotions, joint content, and shared audiences.
                            </p>
                            <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors font-custom">
                                Learn More →
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-custom">Fan Interactions</h3>
                            <p className="text-gray-600 mb-4">
                                Engage directly with your audience through comments, live streams, and exclusive content.
                            </p>
                            <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors font-custom">
                                Learn More →
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl md:col-span-2 lg:col-span-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-custom">Global Reach</h3>
                            <p className="text-gray-600 mb-4">
                                Share your content with a worldwide audience and discover creators from every corner of the globe.
                            </p>
                            <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors font-custom">
                                Learn More →
                            </button>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 font-custom">
                            Join the Community
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="md:col-span-1">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                                    <Camera className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold font-custom">ContentHub</span>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Empowering creators to build, share, and monetize their content in a supportive community.
                            </p>
                            <div className="flex space-x-4">
                                <button className="text-gray-400 hover:text-white transition-colors font-custom">Twitter</button>
                                <button className="text-gray-400 hover:text-white transition-colors font-custom">Instagram</button>
                                <button className="text-gray-400 hover:text-white transition-colors font-custom">YouTube</button>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 font-custom">Product</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 font-custom">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Creator Resources</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 font-custom">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 ContentHub. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

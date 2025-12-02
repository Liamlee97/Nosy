import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

export default function TermsOfUsePage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950">
            <SEO
                title="Terms of Use - Nosy"
                description="Terms of Use for Nosy - Please read these terms carefully before using our website."
                type="website"
                name="Nosy"
            />
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Terms of Use</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-blue max-w-none dark:prose-invert">
                        <h2>1. Terms</h2>
                        <p>
                            By accessing this Website, accessible from https://nosy-six.vercel.app/, you are agreeing to be bound by these
                            Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.
                            If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this
                            Website are protected by copyright and trade mark law.
                        </p>

                        <h2>2. Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials on Nosy's Website for personal,
                            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>

                        <ul>
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose or for any public display;</li>
                            <li>attempt to reverse engineer any software contained on Nosy's Website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>

                        <p>
                            This will let Nosy to terminate upon violations of any of these restrictions. Upon termination, your viewing right
                            will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or
                            electronic format.
                        </p>

                        <h2>3. Disclaimer</h2>
                        <p>
                            All the materials on Nosy's Website are provided "as is". Nosy makes no warranties, may it be expressed or implied,
                            therefore negates all other warranties. Furthermore, Nosy does not make any representations concerning the accuracy
                            or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked
                            to this Website.
                        </p>
                        <p>
                            <strong>Medical Disclaimer:</strong> The content provided on this website is for informational and educational purposes only.
                            It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice
                            of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                        </p>

                        <h2>4. Limitations</h2>
                        <p>
                            Nosy or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use
                            the materials on Nosy's Website, even if Nosy or an authorize representative of this Website has been notified,
                            orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties
                            or limitations of liability for incidental damages, these limitations may not apply to you.
                        </p>

                        <h2>5. Revisions and Errata</h2>
                        <p>
                            The materials appearing on Nosy's Website may include technical, typographical, or photographic errors. Nosy will not
                            promise that any of the materials in this Website are accurate, complete, or current. Nosy may change the materials
                            contained on its Website at any time without notice. Nosy does not make any commitment to update the materials.
                        </p>

                        <h2>6. Links</h2>
                        <p>
                            Nosy has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site.
                            The presence of any link does not imply endorsement by Nosy of the site. The use of any linked website is at the user's own risk.
                        </p>

                        <h2>7. Site Terms of Use Modifications</h2>
                        <p>
                            Nosy may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing
                            to be bound by the current version of these Terms and Conditions of Use.
                        </p>

                        <h2>8. Your Privacy</h2>
                        <p>
                            Please read our Privacy Policy.
                        </p>

                        <h2>9. Governing Law</h2>
                        <p>
                            Any claim related to Nosy's Website shall be governed by the laws of us without regards to its conflict of law provisions.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

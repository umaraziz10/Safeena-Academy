-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 05 Bulan Mei 2025 pada 21.17
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `safeena_academy`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `consultations`
--

CREATE TABLE `consultations` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `psychologist_id` int(11) NOT NULL,
  `type_of_service` enum('onsite','e-counseling','home-visit') NOT NULL,
  `consult_date` date NOT NULL,
  `status` enum('Approved','Pending','Done','Declined') NOT NULL DEFAULT 'Pending',
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `time_slot_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `consultations`
--

INSERT INTO `consultations` (`id`, `user_id`, `psychologist_id`, `type_of_service`, `consult_date`, `status`, `createdAt`, `updatedAt`, `time_slot_id`) VALUES
(5, 37, 1, 'onsite', '2025-05-05', 'Done', '2025-05-05 18:56:01', '2025-05-05 18:56:50', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `courses`
--

INSERT INTO `courses` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Anxiety Disorders', 'Anxiety disorders are mental health conditions marked by excessive and persistent feelings of worry, fear, or nervousness that can interfere with daily activities. Unlike normal anxiety—which is a temporary response to stress—these disorders involve intense emotions that may arise without a clear cause and last for extended periods. Common types include generalized anxiety disorder, panic disorder, social anxiety disorder, and specific phobias. Symptoms may be emotional, such as constant worry or fear, as well as physical, like a racing heart, muscle tension, or difficulty sleeping.\n\nThe causes of anxiety disorders are complex and can involve a mix of genetic, psychological, and environmental factors, including trauma or chronic stress. Although these conditions can be challenging, they are treatable. Many individuals find relief through therapy, medication, lifestyle changes, or a combination of approaches. Early recognition and proper support can greatly improve quality of life and help individuals manage their symptoms effectively.', '2025-05-05 19:59:19', '2025-05-05 19:59:19'),
(2, 'Depression', 'Depression is a common mental health condition characterized by persistent feelings of sadness, hopelessness, and a loss of interest or pleasure in activities once enjoyed. It affects how individuals think, feel, and behave, often leading to emotional and physical problems that can interfere with daily functioning. Unlike occasional low moods, depression symptoms last for weeks or even months and may include fatigue, changes in appetite or sleep patterns, difficulty concentrating, and thoughts of self-harm or suicide.\n\nDepression can be caused by a combination of genetic, biological, environmental, and psychological factors. Life events such as trauma, loss, or chronic stress can also contribute. Fortunately, depression is treatable. Many individuals experience improvement with psychotherapy, medications like antidepressants, lifestyle modifications, or a combination of treatments. Early intervention and support from loved ones play a crucial role in recovery.', '2025-05-05 19:59:19', '2025-05-05 19:59:19'),
(3, 'Help Family and Friends', 'Helping family and friends with mental health challenges involves offering support, understanding, and encouragement without judgment. It requires active listening, patience, and empathy, while also respecting their boundaries and choices. Sometimes, individuals struggling with mental health may isolate themselves or hesitate to seek help, making it even more important to stay connected and check in regularly.\n\nSupport can also mean assisting them in finding professional care, whether through therapy, support groups, or medical treatment. It’s essential to educate yourself about their condition to better understand their experiences and avoid stigmatizing language. While providing support, it’s equally important to maintain your own well-being by setting boundaries and seeking support for yourself when needed.', '2025-05-05 19:59:19', '2025-05-05 19:59:19'),
(4, 'Sleep Better', 'Getting quality sleep is vital for both physical and mental health. Poor sleep can worsen stress, anxiety, and mood disorders, while adequate sleep supports emotional regulation, concentration, and overall resilience. Sleep challenges may stem from various factors, including stress, irregular schedules, caffeine intake, or underlying health conditions.\n\nImproving sleep involves adopting healthy habits known as “sleep hygiene.” This includes maintaining a consistent sleep schedule, creating a calming bedtime routine, limiting screen time before bed, reducing caffeine and alcohol intake, and ensuring the sleep environment is dark, quiet, and comfortable. For those with chronic insomnia or sleep disorders, professional evaluation and treatments such as cognitive behavioral therapy for insomnia (CBT-I) may be recommended.', '2025-05-05 19:59:19', '2025-05-05 19:59:19'),
(5, 'Panic Attack', 'A panic attack is a sudden episode of intense fear or discomfort that peaks within minutes, often accompanied by physical symptoms such as a racing heart, chest pain, shortness of breath, dizziness, sweating, or trembling. People experiencing a panic attack may feel like they are losing control, having a heart attack, or even dying, though the episode is not life-threatening.\n\nPanic attacks can occur unexpectedly or in response to specific triggers. They are a hallmark symptom of panic disorder but can also appear in other anxiety-related conditions. Treatment options include cognitive behavioral therapy, relaxation techniques, exposure therapy, and sometimes medications like antidepressants or anti-anxiety drugs. Learning coping strategies and recognizing early warning signs can help individuals manage and reduce the frequency of panic attacks.', '2025-05-05 19:59:19', '2025-05-05 19:59:19'),
(6, 'OCD', 'Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by recurring, unwanted thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) aimed at reducing anxiety caused by these thoughts. For example, someone might repeatedly check if doors are locked or wash their hands excessively to relieve fears of harm or contamination.\n\nOCD is not simply a preference for order or cleanliness—it involves significant distress and time-consuming rituals that interfere with daily life. The exact cause is unknown but may involve a combination of genetic, neurological, and environmental factors. Treatment often includes cognitive behavioral therapy, specifically exposure and response prevention (ERP), and sometimes medication like selective serotonin reuptake inhibitors (SSRIs). With proper support and treatment, many individuals with OCD can manage their symptoms and lead fulfilling lives.', '2025-05-05 19:59:19', '2025-05-05 19:59:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `materials`
--

CREATE TABLE `materials` (
  `material_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `week` int(11) NOT NULL,
  `materials_title` varchar(255) NOT NULL,
  `materials_desc` text DEFAULT NULL,
  `materials_video` varchar(255) DEFAULT NULL,
  `materials_duration` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `materials`
--

INSERT INTO `materials` (`material_id`, `course_id`, `week`, `materials_title`, `materials_desc`, `materials_video`, `materials_duration`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'Fight/Flight/Freeze Response: Anxiety Skills #1', 'The fight/flight/freeze response is an automatic reaction to perceived danger, triggering the body’s survival instincts. This response can be activated by stress, anxiety, or fear, leading to physical changes like a racing heart or shallow breathing. Understanding this reaction helps individuals recognize when they’re in an anxious state and learn how to manage it, allowing them to regain control and reduce overwhelming feelings of fear or panic.', 'https://youtu.be/RPyzPH8sB2A?si=CTs6V_Q_e7yDZ0rR', 5, 0, '2025-05-05 20:55:40', '2025-05-05 20:55:40'),
(2, 1, 1, 'Stress, Anxiety, and Worry: Anxiety Skills #2', 'Stress, anxiety, and worry are interconnected emotions that can interfere with daily life when they become excessive. While stress often arises from external pressures, anxiety is more internal and persistent, and worry is the constant overthinking of possible negative outcomes. Learning the distinctions between these feelings and their triggers can help individuals better cope with them through mindfulness, relaxation techniques, and other strategies for emotional regulation.', 'https://youtu.be/aOGP3mltnZE?si=8szNr8D10Aro8Bs2', 4, 0, '2025-05-05 21:03:26', '2025-05-05 21:03:26'),
(3, 1, 2, 'How Nervous Is Your Nervous System? Anxiety Skills #3', 'The nervous system plays a key role in how we experience anxiety. When overwhelmed, it can trigger the body\'s fight-or-flight response, leading to heightened physical sensations like sweating, dizziness, or rapid heartbeat. This exercise helps individuals assess their nervous system\'s reactions to anxiety and understand the balance between nervous excitement and overwhelming fear, offering strategies for calming the system down.', 'https://youtu.be/uKN5I-Mtgzs?si=CiUAYXhDjt5_HBSQ', 3, 0, '2025-05-05 21:03:26', '2025-05-05 21:03:26'),
(4, 1, 2, 'How to Turn off the Fight/Flight/Freeze Response: Anxiety Skills #4', 'The fight/flight/freeze response is meant for survival, but it can be detrimental if activated frequently due to anxiety. Learning techniques such as deep breathing, mindfulness, and grounding exercises can help \"turn off\" this response and return the body to a calmer state. These skills enable individuals to regain control over their emotions and reduce the intensity of anxiety when triggered by stress.', 'https://youtu.be/agdpFsKGdOE?si=NxxzdKLukGNDcm_K', 7, 0, '2025-05-05 21:03:26', '2025-05-05 21:03:26'),
(5, 1, 3, 'Grounding Exercise: Anxiety Skills #5', 'Grounding exercises are techniques that help individuals focus on the present moment to reduce feelings of anxiety and dissociation. By using the senses—such as focusing on what you can see, hear, or touch—these exercises help anchor you to reality, shifting attention away from overwhelming emotions and bringing a sense of calm and control in moments of anxiety.', 'https://youtu.be/1ao4xdDK9iE?si=hOhDBzR6IJ82T8RD', 3, 0, '2025-05-05 21:03:26', '2025-05-05 21:03:26'),
(6, 1, 3, 'Perceived Danger and Creating Safety: Anxiety Skills #6', 'Perceived danger is the brain\'s interpretation of threat, often amplifying fear and anxiety. Creating a sense of safety involves recognizing that the threat is not immediate and learning to reframe negative thought patterns. By using techniques like self-soothing, cognitive restructuring, and visualization, individuals can reduce perceived danger and establish a secure mental space, helping to manage their anxiety.', 'https://youtu.be/W0QAtywrv5c?si=IhoSeb2dH2Qvm8Vp', 3, 0, '2025-05-05 21:03:26', '2025-05-05 21:03:26'),
(7, 1, 4, 'Drawing Exercise for Anxiety: Anxiety Skills #7', 'Drawing exercises offer a creative outlet for managing anxiety. By channeling anxious energy into visual expression, individuals can externalize their worries and gain a sense of control over their emotions. This technique encourages mindfulness and can help individuals process feelings, providing clarity and emotional relief through the act of creating art.', 'https://youtu.be/YTHgm8wL_IE?si=DqqWryD3saZg8yu_', 2, 0, '2025-05-05 21:03:26', '2025-05-05 21:03:26'),
(8, 1, 4, 'Emotional Flooding: How Anxiety Impacts Relationships: Relationship Skills #8', 'Emotional flooding occurs when intense emotions, often triggered by anxiety, overwhelm an individual, leading to difficulty communicating or reacting impulsively. This can strain relationships, especially when one partner is unable to regulate their emotional responses. Learning how to manage emotional flooding through self-awareness, communication strategies, and empathy can help maintain healthy relationships even in stressful situations.', 'https://youtu.be/7xwOZVRK_B8?si=0zB4yoxyllw7C8fh', 6, 0, '2025-05-05 21:03:26', '2025-05-05 21:03:26'),
(9, 2, 1, 'Your Depression Is Lying to You: Depression Treatment Options: Depression Skills #1', 'Depression often distorts reality, making you feel hopeless, worthless, or as if things will never improve. Recognizing that depression \"lies\" to you is the first step in recovery. Treatment options, such as therapy, medication, and lifestyle changes, can help challenge these negative beliefs and restore a sense of control. Understanding that depression is a treatable condition empowers individuals to seek help and work towards healing.', 'https://youtu.be/TTHOjqIRQ34?si=feq0-v9GisJD3Gfn', 8, 0, '2025-05-05 21:03:26', '2025-05-05 21:03:26'),
(10, 2, 1, 'How to Help Someone With Depression: 32 Tips for When They Don\'t Want to Talk: Depression Skills #2', 'Supporting someone with depression can be challenging, especially when they don\'t want to talk. This guide offers 32 practical tips for offering support in non-verbal ways—whether through physical presence, small gestures, or providing resources. Understanding the need for patience and non-judgmental support can help create a safe space for individuals to eventually open up when they are ready.', 'https://youtu.be/HQm7xRjl6-I?si=bqQ-RT1vqnaGEkTV', 5, 0, '2025-05-05 21:03:26', '2025-05-05 21:03:26'),
(11, 2, 2, 'Is This Why You\'re Depressed? Stop Should-ing on Yourself', '\"Should-ing\" is a common cognitive distortion in depression, where you place unrealistic or rigid expectations on yourself. These self-imposed pressures, like \"I should be happy\" or \"I should be doing better,\" contribute to feelings of inadequacy and guilt. Learning to let go of \"should\" statements helps to reduce self-blame and increases self-compassion, allowing for healthier emotional responses and progress in managing depression.', 'https://youtu.be/PeF-mIrYIIU?si=aldHKbL8iE2sToZc', 10, 0, '2025-05-05 21:03:26', '2025-05-05 21:03:26'),
(12, 2, 2, 'How to Stop the SHAME Spiral \"Am I a Bad Person?\"- Shame vs. Guilt', 'Shame is a powerful emotion that can worsen depression, often leading to the destructive thought pattern of \"Am I a bad person?\" Unlike guilt, which is about actions, shame targets the self. Understanding the difference between shame and guilt is crucial in stopping the spiral. Practicing self-forgiveness, compassion, and reframing negative beliefs helps break free from shame’s grip, fostering emotional healing and growth.', 'https://youtu.be/7KepQX1tBvI?si=uma2mhUWRGbjSM4C', 9, 0, '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(13, 2, 3, 'Does Inflammation Cause Depression?', 'Recent research suggests that inflammation may play a role in the development of depression. Chronic inflammation, caused by factors such as poor diet, stress, or autoimmune disorders, may alter brain chemistry and increase feelings of sadness or anxiety. Understanding this connection opens up new treatment avenues, such as anti-inflammatory therapies or lifestyle changes, to help manage depression in certain individuals.', 'https://youtu.be/-NiCmHKmQWg?si=P35LeeUP5KamLRtI', 10, 0, '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(14, 2, 3, 'Inflammation as a cause of depression | Charles Raison', 'Dr. Charles Raison explores how inflammation could contribute to depression in groundbreaking research. His work suggests that inflammatory responses in the body can influence mood regulation and increase the risk of developing depression. By addressing inflammation through dietary changes, medication, or other interventions, individuals may be able to reduce the severity of depressive symptoms and promote mental well-being.', 'https://youtu.be/tCnxLqeIZLc?si=iAo79kgUDRqi-_8e', 4, 0, '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(15, 2, 4, '5 Lies Depression Tells You - Depression Motivation, it gets better', 'Depression often feeds individuals lies that perpetuate hopelessness and despair. These include thoughts like \"I’ll never get better\" or \"I’m unworthy of happiness.\" Understanding these lies is a key step in overcoming them. With proper treatment and time, these false beliefs can be replaced with a more accurate and hopeful perspective, empowering individuals to take action towards recovery and well-being.', 'https://youtu.be/uq2C8us969M?si=4y-HTs4_DBEarXWz', 9, 0, '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(16, 2, 4, 'How to recover from depression', 'Recovering from depression is a journey that involves a combination of treatment options, self-care practices, and ongoing support. Strategies include therapy (especially Cognitive Behavioral Therapy), medication, physical activity, and lifestyle changes. Building a support network, establishing healthy routines, and engaging in meaningful activities can also significantly enhance recovery. Patience and persistence are key, as healing from depression is often gradual but achievable.', 'https://youtu.be/TVgQ_tgWMyU?si=joky_-1LDKFsxO9W', 63, 0, '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(17, 3, 1, 'How to Help Someone With Depression or Anxiety', 'Supporting someone with depression or anxiety involves offering a listening ear, validating their feelings, and helping them access professional care when needed. It’s important to be patient and non-judgmental, as mental health struggles can be difficult to articulate. Providing practical help, like assisting with daily tasks or encouraging positive coping strategies, can make a big difference in their recovery.', 'https://youtu.be/0Yr4hyFSJPk?si=ogQQJLL9wrjtWPaX', 3, 0, '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(18, 3, 1, 'Attention-Seeking Behavior: When \"Just Ignore It\" Doesn\'t Work', 'Attention-seeking behavior can be a sign of underlying emotional distress or unmet needs. Simply ignoring the behavior often doesn’t address the root cause, and may inadvertently reinforce feelings of loneliness or frustration. Instead, it’s essential to acknowledge the person\'s feelings, provide support, and help them express their needs in healthier ways through communication and emotional validation.', 'https://youtu.be/YpJ3nSLr3Tw?si=6yJ-70CJlwJ_O0vU', 7, 0, '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(19, 3, 2, 'Reflective Listening: How to Be a Good Listener', 'Reflective listening is an active listening technique where the listener mirrors the speaker’s feelings or thoughts to ensure understanding and empathy. By paraphrasing or summarizing what the speaker has shared, you demonstrate attentiveness and validation, which can help build trust and improve communication. This technique is especially helpful for individuals going through emotional difficulties, allowing them to feel heard and supported.', 'https://youtu.be/eUtZk960Q_A?si=78Psoq9BhdU3R-tw', 9, 0, '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(20, 3, 2, 'Homeostasis: Why Changing Families Is Hard, and How You Can Make Change Last', 'Family dynamics often operate like a system of homeostasis, where any change is met with resistance to maintain stability. When one member seeks change—whether through therapy, new behaviors, or life transitions—it can cause tension or pushback from others who are accustomed to the current dynamic. Making lasting change requires understanding these dynamics, communicating openly, and involving all members in the process to encourage cooperation and acceptance.', 'https://youtu.be/fuOK3921W2M?si=LY22SV2JJZbxjF8r', 9, 0, '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(21, 3, 3, 'How to Talk About Suicidal Thoughts: Simple Strategies for Parents and Friends', 'Talking about suicidal thoughts can be uncomfortable but is essential for providing support to someone in crisis. Approaching the conversation with care, compassion, and non-judgment is key. Encouraging the person to express their feelings, listening without offering solutions right away, and reassuring them that they’re not alone can help them feel safe and supported. Always seek professional help if needed.', 'https://youtu.be/JLX4SqT7H-c?si=u5iRytC_7bvzX8S9', 9, 0, '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(22, 3, 3, 'Cutting: Let\'s Talk About Self-Harm (And 4 Ways You Can Help)', 'Self-harm is often a coping mechanism for overwhelming emotions or mental health struggles. While it may seem like a private matter, it’s crucial to address it with empathy and understanding. Offering non-judgmental support, helping the person find healthier ways to cope, encouraging professional care, and creating a safe environment are essential steps in offering help to someone struggling with self-harm.', 'https://youtu.be/-5Z4cLwd698?si=YDyBcMBYZZ3Zpf3S', 5, 0, '2025-05-05 21:05:51', '2025-05-05 21:05:51'),
(23, 3, 4, 'Grief: 4 Resources to Help a Grieving Friend', 'Grieving is a deeply personal process, and offering support to a friend who is grieving involves providing resources and a compassionate presence. Recommended resources include counseling, support groups, helpful books on grief, and online platforms. It’s important to give the grieving person space to express their emotions while also checking in with them to offer encouragement and support through their healing journey.', 'https://youtu.be/Z0IgYTi4aTs?si=cBc4T7GiBXJYMmkx', 5, 0, '2025-05-05 21:05:51', '2025-05-05 21:05:51'),
(24, 3, 4, 'How to Talk With Your Teen After a Peer\'s Suicide or Death at Their School', 'Talking to a teenager after a peer’s death can be difficult but is crucial for helping them process their grief and emotions. Approach the conversation with openness, allowing your teen to share their feelings without judgment. Be patient, reassure them that their emotions are valid, and offer professional support or resources if needed. Creating a space for honest communication helps them navigate their emotions and find coping strategies.', 'https://youtu.be/EsFRTYws1L8?si=F8DX5pVrOlWpSwN7', 10, 0, '2025-05-05 21:05:51', '2025-05-05 21:05:51'),
(25, 4, 1, 'Sleep, Anxiety, and Insomnia: How to Sleep Better When You\'re Anxious', 'Anxiety and insomnia often go hand in hand, making it difficult to fall and stay asleep. Anxiety can trigger racing thoughts, tension, and physical symptoms that disrupt sleep. Techniques such as deep breathing, progressive muscle relaxation, cognitive behavioral therapy for insomnia (CBT-I), and establishing a calming bedtime routine can help manage both anxiety and insomnia, promoting a better night’s sleep.', 'https://youtu.be/wkGWwyrCoRs?si=01LzKqDAu9N8ofgd', 14, 0, '2025-05-05 21:05:51', '2025-05-05 21:05:51'),
(26, 4, 1, 'Sleep Hygiene: Train Your Brain to Fall Asleep and Sleep Better', 'Sleep hygiene refers to habits and practices that promote consistent, quality sleep. This includes setting a regular sleep schedule, creating a calming bedtime routine, avoiding stimulants like caffeine or screens before bed, and making your sleep environment comfortable. Good sleep hygiene helps train your brain to associate certain actions with sleep, improving the quality and duration of rest.', 'https://youtu.be/fk-_SwHhLLc?si=53dUjrGGnQ_Iq2Ix', 8, 0, '2025-05-05 21:05:51', '2025-05-05 21:05:51'),
(27, 4, 2, 'How to Fall Asleep: Turn off Worry and Insomnia With This Quick Skill', 'One effective technique to fall asleep faster is to practice mindfulness or use relaxation skills to calm the mind. Techniques like progressive muscle relaxation or visualization can help reduce physical tension and mental chatter, turning off worries and easing the transition into sleep. Creating a peaceful, sleep-friendly environment and sticking to a bedtime routine can further support this process.', 'https://youtu.be/CAGUVH_yIRE?si=gTaxWu6DbRIJeKkF', 4, 0, '2025-05-05 21:05:51', '2025-05-05 21:05:51'),
(28, 4, 2, 'Happy Place Meditation: Relax and Fall Asleep Faster', 'Happy Place Meditation involves visualizing a peaceful and calming place where you feel safe and relaxed. This guided meditation can help clear your mind of stressful thoughts and promote relaxation, making it easier to fall asleep. By focusing on this serene mental image, your body can enter a restful state, reducing anxiety and promoting deeper, more restorative sleep.', 'https://youtu.be/MEe6dnetwuE?si=SwRBEF4_srDlU876', 8, 0, '2025-05-05 21:05:51', '2025-05-05 21:05:51'),
(29, 4, 3, 'Best Sleep Products Review: How to Sleep Better', 'Finding the right products can significantly improve your sleep quality. This review covers various sleep aids, including mattresses, pillows, sleep masks, and white noise machines. Understanding which products suit your sleep style and needs, such as firmness preferences or light sensitivity, can help you create an optimal sleep environment for better rest and relaxation.', 'https://youtu.be/Qgv1Z_suqw4?si=xyeA1PH5V73jvUre', 10, 0, '2025-05-05 21:05:51', '2025-05-05 21:05:51'),
(30, 4, 3, 'How to Stop Having Nightmares for Adults - 9 tools', 'Nightmares can disrupt sleep and cause emotional distress, but there are tools to help reduce or eliminate them. Techniques such as cognitive behavioral therapy for nightmares (CBT-N), relaxation methods, establishing a consistent sleep routine, and addressing stress and trauma through therapy can reduce the frequency of nightmares and improve sleep quality.', 'https://youtu.be/WJXY_u0KAR0?si=-L6RqHviwsA0kaIB', 18, 0, '2025-05-05 21:05:51', '2025-05-05 21:05:51'),
(31, 4, 4, 'Insomnia - w/ Sleep Expert Martin Reed', 'Sleep expert Martin Reed discusses the causes of insomnia and offers practical solutions for overcoming it. From understanding the root causes of poor sleep to utilizing proven techniques like cognitive behavioral therapy for insomnia (CBT-I), this guide helps individuals learn effective strategies to manage their insomnia and improve their overall sleep health.', 'https://youtu.be/lPaIMwaiANI?si=ww5j8zR5UBn3Wf58', 41, 0, '2025-05-05 21:05:51', '2025-05-05 21:05:51'),
(32, 4, 4, 'Insomnia- How to Fall Asleep When your Brain Won\'t Shut Up!', 'Insomnia often stems from an overactive mind that struggles to relax at bedtime. To combat this, techniques such as deep breathing, journaling before bed, or guided meditations can help quiet the mind. Creating a routine that signals to your brain it’s time to wind down—along with limiting stimulating activities before bed—can aid in falling asleep faster and achieving restful sleep.', 'https://youtu.be/g6QK5UEXLYc?si=jm7X2QTHRFAs-qmX', 12, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(33, 5, 1, 'What\'s the Difference Between Panic Attacks, Anxiety Attacks, and Panic Disorder? 1/3 Panic Attacks', 'Panic attacks, anxiety attacks, and panic disorder are related but distinct experiences. Panic attacks are sudden episodes of intense fear, while anxiety attacks are typically associated with chronic worry or stress. Panic disorder involves recurrent panic attacks, leading to ongoing fear of future attacks. Understanding these differences helps individuals identify their symptoms and seek the appropriate treatment.', 'https://youtu.be/Lp2jgkoVLys?si=nZkTbEYqiWvIfN7E', 8, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(34, 5, 1, 'What Causes The Panic Attack Cycle 2/3 How to Stop Panic Attacks', 'The panic attack cycle is often triggered by physical sensations of anxiety, leading to fear and avoidance behaviors that reinforce the cycle. By learning to confront these sensations with relaxation techniques, deep breathing, and cognitive restructuring, individuals can break the cycle and reduce the frequency and intensity of panic attacks.', 'https://youtu.be/4TRuJpSyMoY?si=1SE_qlJRrEzUTaO1', 12, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(35, 5, 2, 'How to Stop Panic Attacks Part 3/3', 'In this guide, we explore strategies for managing and preventing panic attacks, such as gradual exposure to feared situations, mindfulness techniques, and utilizing grounding exercises. These methods help individuals reduce the intensity of panic attacks and regain a sense of control over their bodies and emotions during episodes of anxiety.', 'https://youtu.be/wR8oKZ5qTfk?si=PCxfyAN-YstYAz6c', 16, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(36, 5, 2, 'My System for Stopping Anxiety Attacks: 5 steps, 20+ Skills for Panic Attacks', 'This system includes five key steps and over 20 different coping skills to help individuals manage and stop anxiety and panic attacks. Techniques range from deep breathing exercises and visualization to self-talk strategies and grounding techniques, all designed to help people regain control during moments of panic and anxiety.', 'https://youtu.be/JA86YOd4zx4?si=0plFqkrke17KeG7f', 15, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(37, 5, 3, 'Having a Panic Attack? The Anti-Struggle Technique -A Guided Walkthrough to Stop a Panic Attack', 'The Anti-Struggle Technique focuses on accepting the panic attack as it is, without trying to fight it. By allowing the panic to unfold without resistance, individuals can prevent the intensification of symptoms and allow the body to calm down naturally. This guided walkthrough provides step-by-step instructions for implementing this technique to stop a panic attack.', 'https://youtu.be/2CQpyA485wc?si=HO-OjJrxrre-3ZUe', 8, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(38, 5, 3, 'So, You\'re Having an Anxiety Attack (The Calm-Down Method for Stopping Anxiety Attacks)', 'The Calm-Down Method involves focusing on deep, controlled breathing and redirecting attention away from anxiety-inducing thoughts. This method can help individuals manage the physical and emotional symptoms of an anxiety attack by regaining focus, calming the nervous system, and gradually reducing feelings of panic.', 'https://youtu.be/WGG7MGgptxE?si=mdZNS1JwpaYs3lo1', 5, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(39, 5, 4, 'THIS guy solved Panic Attacks after 30 years of Panic Disorder', 'This story highlights a person’s journey of overcoming panic disorder after 30 years of struggling with panic attacks. By implementing therapeutic techniques, lifestyle changes, and understanding the underlying triggers of panic, this individual was able to break free from the cycle of panic attacks and regain control of their life.', 'https://youtu.be/of6xObz3aK4?si=b7PHvY_iLV66XKte', 9, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(40, 5, 4, 'Break free from Panic Attacks and Agoraphobia - with Drew Linslata, host of The Anxious Truth', 'Drew Linslata shares strategies for overcoming panic attacks and agoraphobia, offering insights into how understanding the root causes of these conditions can lead to lasting change. His approach combines exposure therapy, mindfulness, and cognitive restructuring to help individuals confront and manage their fears, ultimately regaining their confidence and freedom.', 'https://www.youtube.com/live/il47Xomwz94?si=qihKebJleAef_wzH', 61, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(41, 6, 1, 'My Hidden OCD Exposed | Anne Swanson | TEDxVermilionStreet', 'In this TEDx talk, Anne Swanson shares her personal journey with Obsessive-Compulsive Disorder (OCD), revealing the hidden struggles and misconceptions of living with the condition. Her story highlights the importance of seeking treatment and understanding that OCD is not simply about quirky habits, but a serious mental health issue that requires compassion and support.', 'https://youtu.be/A3f4Gf5Q_2w?si=F_XoQFFsg-qFcqoH', 14, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(42, 6, 1, 'Can You Be Successful With a Mental Illness? OCD, John Green, And Turtles All the Way Down', 'This discussion explores whether it’s possible to be successful while managing a mental illness, using John Green’s novel Turtles All the Way Down as a reference point. The book highlights the author\'s personal experience with OCD and offers hope and validation for individuals dealing with mental health challenges while pursuing their dreams and careers.', 'https://youtu.be/0Gl7qcYw2MQ?si=emtnYyzCa3Bpi8WC', 6, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(43, 6, 2, 'Intrusive Thoughts: Psychologist Answers Your Questions', 'Intrusive thoughts are unwanted, often distressing ideas or images that can cause anxiety or guilt. A psychologist answers common questions about these thoughts, explaining why they occur, how to manage them, and when they may indicate a mental health condition like OCD or generalized anxiety disorder. Understanding these thoughts helps individuals cope without self-blame.', 'https://youtu.be/GeZa1OeEk-s?si=L0gcivGUFivsv5HL', 45, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(44, 6, 2, 'Dr Michael Greenberg - Rumination is a compulsion (#252)', 'Dr. Michael Greenberg discusses the relationship between rumination—repetitive, overthinking thoughts—and compulsive behaviors in mental health disorders like OCD. He explains how rumination can exacerbate anxiety and depression, and offers strategies for breaking free from these patterns by challenging negative thought cycles and practicing mindfulness.', 'https://youtu.be/PcFTi7HJYnk?si=KgDEs_HXpUA4vJMb', 49, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(45, 6, 3, 'The 6 Most Common Types of Intrusive Thoughts', 'This guide covers the six most common types of intrusive thoughts, including violent, sexual, and blasphemous thoughts, among others. Understanding that these thoughts are not reflective of one’s character but rather a symptom of anxiety or OCD helps reduce shame and enables individuals to manage these experiences more effectively.', 'https://youtu.be/2gUwiYqG57Y?si=ywY2ui-knyb07CpJ', 9, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(46, 6, 3, '6 Thinking Patterns that Make OCD and Anxiety Worse', 'Certain thinking patterns, such as catastrophizing, perfectionism, or magical thinking, can worsen OCD and anxiety. This guide identifies these patterns and offers strategies to challenge them, replacing them with healthier cognitive habits that reduce the intensity of symptoms and improve emotional regulation.', 'https://youtu.be/1TcbLuyupNo?si=IICLBgt-li4g0vv_', 11, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(47, 6, 4, 'Trichotillomania: Treating BFRB\'s like Hair-Pulling Disorder and Skin-Picking Excoriation', 'Trichotillomania and other Body-Focused Repetitive Behaviors (BFRBs) like skin-picking are disorders that can be difficult to overcome but can be managed with the right treatment. This guide explores the underlying causes of these behaviors and offers therapeutic options like Habit Reversal Training (HRT) and cognitive behavioral therapy to help individuals reduce or eliminate these destructive habits.', 'https://youtu.be/n3WOz3_UC-8?si=rVcMQcegMncFjPKZ', 14, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(48, 6, 4, '10 Quick Questions about OCD', 'This FAQ-style guide answers ten common questions about Obsessive-Compulsive Disorder, from its causes and symptoms to treatment options and coping strategies. It provides concise, accessible information for individuals seeking to understand OCD or for those who are struggling with the condition themselves.', 'https://youtu.be/-rht3stkIkE?si=uOVf5mE-k_oPREsg', 28, 0, '2025-05-05 21:07:06', '2025-05-05 21:07:06');

-- --------------------------------------------------------

--
-- Struktur dari tabel `psychologists`
--

CREATE TABLE `psychologists` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `handled_count` int(11) NOT NULL DEFAULT 0,
  `location` varchar(255) NOT NULL,
  `location_url` varchar(255) NOT NULL,
  `education_1` varchar(255) NOT NULL,
  `education_2` varchar(255) DEFAULT NULL,
  `service_type` text NOT NULL,
  `image_path` varchar(30) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `psychologists`
--

INSERT INTO `psychologists` (`id`, `name`, `description`, `handled_count`, `location`, `location_url`, `education_1`, `education_2`, `service_type`, `image_path`, `createdAt`, `updatedAt`) VALUES
(1, 'Marissa Meditania, M.Psi., Psikolog', 'Marissa Meditania, M.Psi, Psychologist is a clinical psychologist who usually helps adolescents and adults overcome psychological problems including emotional problems (anxiety and depression), relationships (friends, family, and partners), stress and burnout (at work and as a parent), personality disorders, OCD, phobias, and others. Therapies commonly used are Cognitive Behavioural Therapy (CBT), Rational-Emotive Behavioural Therapy (REBT), Solution-Focused Therapy, Exposure Therapy, and others. Marissa also often provides psychoeducation through seminars or webinars related to workplace issues, self-development and parenting.', 441, 'Jakarta Selatan - Ibunda.id - Konseling Jakarta, Blok Rini No, Jl. Ampera Raya No.12A, RT.6/RW.2, Ragunan', 'https://maps.app.goo.gl/M22dCDfsytCHTHTi7', 'Universitas Padjadjaran   |   2016 • Sarjana Psikologi', 'Universitas Padjadjaran | 2020 • Magister Profesi Psikologi', '[\"onsite\",\"e-counseling\"]', '/public/psychologists/id1', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(2, 'Novi Maulidta, M.Psi Psikolog', 'Novi Maulidta, M.Psi, Psychologist is a licensed psychologist currently practicing at RS Jiwa Islam Klender. She provides psychological consultation services for individuals dealing with a wide range of mental health concerns such as stress management, emotional regulation, interpersonal difficulties, and self-esteem issues. Novi supports her clients through evidence-based approaches tailored to their unique needs, and is committed to creating a safe, empathetic space for personal growth and healing. She also actively participates in mental health education efforts to increase public awareness and promote psychological well-being.', 2153, 'RS Jiwa Islam Klender', 'https://maps.app.goo.gl/xweLwC1nWNRijckU9', 'Universitas Gunadarma |   2014 • Sarjana Psikologi', NULL, '[\"onsite\",\"e-counseling\"]', '/public/psychologists/id2', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(3, 'Tan Laurencia Yosita, S.Psi., M.Psi., Psikolog', 'Tan Laurencia Yosita, S.Psi., M.Psi., Psychologist is a licensed psychologist and a member of the Indonesian Psychological Association (HIMPSI). She provides psychological health consultations for individuals dealing with a variety of emotional and mental health concerns, aiming to support clients in understanding themselves better and improving their overall well-being. With a compassionate and professional approach, Tan Laurencia creates a safe therapeutic environment where clients can explore their experiences and work towards personal growth and psychological resilience.', 915, 'Rumah Sakit Telogorejo', 'https://maps.app.goo.gl/9j3rwq4mK9Ge7keS9', 'Universitas Katolik Soegijapranata   |   2018 • Bachelor\'s degree', 'Universitas Katolik Soegijapranata   |   2021 • Master\'s degree', '[\"onsite\",\"e-counseling\",\"home-visit\"]', '/public/psychologists/id3', '2025-05-05 20:34:12', '2025-05-05 20:34:12'),
(4, 'Karina Devany, M.Psi., Psikolog', 'Karina Devany, M.Psi, Psychologist is a clinical psychologist for adults with experience in handling cases such as depression, anxiety, personality disorders, interpersonal issues, and trauma-related violence. She primarily uses mindfulness-based approaches and Acceptance and Commitment Therapy (ACT) to help clients build psychological flexibility, face difficult emotions, and live in alignment with their personal values. Karina is committed to providing a compassionate, non-judgmental space where clients can explore their challenges and foster meaningful change.', 601, 'Jakarta Selatan - Ibunda.id - Konseling Jakarta, Blok Rini No, Jl. Ampera Raya No.12A, RT.6/RW.2, Ragunan', 'https://maps.app.goo.gl/M22dCDfsytCHTHTi7', 'Universitas Indonesia   |   2017 • Psikologi S2', 'Universitas Indonesia   |   2021 • Magister Profesi Psikologi', '[\"onsite\",\"e-counseling\"]', '/public/psychologists/id4', '2025-05-05 20:34:12', '2025-05-05 20:34:12'),
(5, 'Anggitta Sabrina Nuraini, M.Psi, Psikolog', 'Anggitta Sabrina Nuraini, M.Psi, Psychologist is a licensed psychologist currently practicing at RS Mitra Keluarga Grand Wisata and RS Mitra Keluarga Deltamas. She offers psychological consultations to help individuals navigate emotional challenges, stress, and personal difficulties. With an academic background in Psychology from Universitas Pelita Harapan and a Master’s degree from Universitas Islam Indonesia, Anggitta combines her clinical knowledge with empathy to support clients in achieving mental wellness and personal insight in a safe and supportive environment.', 194, 'Mitra Keluarga Grand Wisata', 'https://maps.app.goo.gl/KhCint7BjEjeMgcp8', 'Universitas Pelita Harapan   |   2016 • Sarjana Psikologi', 'Universitas Islam Indonesia | 2020 • Magister Psikologi', '[\"onsite\",\"e-counseling\",\"home-visit\"]', '/public/psychologists/id5', '2025-05-05 20:34:12', '2025-05-05 20:34:12'),
(6, 'Roselli Kezia Ausie, M.Psi., Psikolog', 'Roselli Kezia Ausie, M.Psi, Psychologist—often called Kezia—is a clinical psychologist with a strong passion for mental health and extensive experience in supporting young adults through personal challenges such as depression, anxiety, personality issues, and relationship difficulties. Her therapeutic work primarily involves counseling, Cognitive Behavioural Therapy (CBT), and Acceptance and Commitment Therapy (ACT). In addition to her role as an associate at Ibunda.id, Kezia actively develops self-development tools and delivers psychoeducation on topics relevant to the needs and growth of young adults, aiming to empower them in navigating life’s transitions and emotional complexities.', 1211, 'Kota Bandung - Ibunda.id - Konseling Bandung, Jl. Tanjungsari Asri Tengah No.4, Antapani Wetan', 'https://maps.app.goo.gl/9LhQPDJwiwmrJY4j8', 'Universitas Kristen Maranatha   |   2017 • Sarjana Psikologi', 'Universitas Indonesia | 2021 • Magister Profesi Psikologi', '[\"onsite\",\"e-counseling\",\"home-visit\"]', '/public/psychologists/id6', '2025-05-05 20:34:12', '2025-05-05 20:34:12'),
(7, 'Achmad Sholeh, S.Psi., M.Psi., Psikolog', 'Achmad Sholeh, S.Psi., M.Psi., Psychologist is a licensed psychologist and an active member of the Indonesian Psychological Association (HIMPSI). He provides psychological health consultations to support individuals in addressing emotional difficulties, mental well-being, and personal concerns. With a professional and empathetic approach, Achmad is committed to helping clients better understand themselves, manage psychological challenges, and improve their overall quality of life through tailored therapeutic support.', 126, 'RS Dr. Oen Solo Baru', 'https://maps.app.goo.gl/zrH9SbA9GNWeF98S9', 'Universitas Islam Indonesia   |   2017 • Sarjana Psikologi', 'Universitas Islam Indonesia | 2020 • Magister Psikologi', '[\"onsite\",\"e-counseling\",\"home-visit\"]', '/public/psychologists/id7', '2025-05-05 20:34:12', '2025-05-05 20:34:12'),
(8, 'Maria Yosephin, S.Psi, M.Psi', 'Maria Yosephin, S.Psi, M.Psi, Psychologist is a licensed psychologist and a member of the Indonesian Psychological Association (HIMPSI). She offers psychological consultation services to individuals seeking support for emotional well-being, personal development, and mental health challenges. With a client-centered approach and professional care, Maria is dedicated to creating a safe and supportive space where clients can explore their thoughts and emotions, work through difficulties, and enhance their psychological resilience.', 117, 'Charitas Hospital Palembang', 'https://maps.app.goo.gl/TFhLo4TRKQFdhqef8', 'Universitas Sanata Dharma   |   2016 • Sarjana Psikologi', 'Universitas Katolik Indonesia Atma Jaya | 2020 • Magister Psikologi', '[\"onsite\",\"e-counseling\"]', '/public/psychologists/id8', '2025-05-05 20:34:12', '2025-05-05 20:34:12');

-- --------------------------------------------------------

--
-- Struktur dari tabel `psychologisttimeslots`
--

CREATE TABLE `psychologisttimeslots` (
  `id` int(11) NOT NULL,
  `psychologist_id` int(11) DEFAULT NULL,
  `time_slot_id` int(11) DEFAULT NULL,
  `day` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `psychologisttimeslots`
--

INSERT INTO `psychologisttimeslots` (`id`, `psychologist_id`, `time_slot_id`, `day`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'Monday', '2025-05-05 20:37:05', '2025-05-05 20:37:05');

-- --------------------------------------------------------

--
-- Struktur dari tabel `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `options` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`options`)),
  `correctIndex` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `quizId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `questions`
--

INSERT INTO `questions` (`id`, `text`, `options`, `correctIndex`, `createdAt`, `updatedAt`, `quizId`) VALUES
(1, 'What is the fight/flight/freeze response?', '[\"A reaction to perceived danger\",\"A reaction to happiness\",\"A way to relax\",\"A physical exercise\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(2, 'What can activate the fight/flight/freeze response?', '[\"Joy\",\"Stress\",\"Sleep\",\"Calmness\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(3, 'How can stress and anxiety impact daily life?', '[\"By improving focus\",\"By interfering with daily tasks\",\"By making you feel energetic\",\"By increasing relaxation\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(4, 'Which of the following is an internal emotion?', '[\"Stress\",\"Worry\",\"Fear\",\"Excitement\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(5, 'What does the nervous system do in response to anxiety?', '[\"It calms you down\",\"It triggers the fight/flight response\",\"It makes you sleep\",\"It helps with breathing\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(6, 'Which of the following techniques helps turn off the fight/flight/freeze response?', '[\"Jumping\",\"Deep breathing\",\"Shouting\",\"Running away\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(7, 'What is the purpose of grounding exercises?', '[\"To relax your body\",\"To focus on the present moment\",\"To sleep better\",\"To exercise your muscles\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(8, 'What does creating safety in your mind help with?', '[\"Increases anxiety\",\"Reduces perceived danger\",\"Makes you worry more\",\"Makes you anxious\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(9, 'What can drawing exercises help you with?', '[\"Process feelings\",\"Exercise your muscles\",\"Forget about your worries\",\"Sleep better\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(10, 'What is emotional flooding in relationships?', '[\"Being too relaxed\",\"Difficulty communicating due to overwhelming emotions\",\"Laughing too much\",\"Communicating better when stressed\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(11, 'What is the first step in recovering from depression?', '[\"Recognizing that depression lies to you\",\"Accepting the sadness\",\"Talking about it\",\"Ignoring negative thoughts\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(12, 'What is one tip for helping someone with depression when they don\'t want to talk?', '[\"Offer them advice\",\"Give them space but show support\",\"Force them to open up\",\"Shout at them to talk\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(13, 'What does \'should-ing\' on yourself in depression lead to?', '[\"Increased self-compassion\",\"Feelings of inadequacy and guilt\",\"Better self-understanding\",\"Greater relaxation\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(14, 'What is the difference between shame and guilt in depression?', '[\"Shame is about actions, guilt is about the self\",\"Shame targets the self, guilt is about actions\",\"Shame and guilt are the same\",\"Shame helps heal depression\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(15, 'What role might inflammation play in depression?', '[\"It decreases feelings of sadness\",\"It may contribute to the development of depression\",\"It has no impact\",\"It reduces the effectiveness of treatment\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(16, 'According to Dr. Charles Raison, what is the connection between inflammation and depression?', '[\"Inflammation worsens mood regulation and increases depression risk\",\"Inflammation reduces depression\",\"Inflammation has no effect\",\"Inflammation makes people happier\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(17, 'What are some of the lies depression tells you?', '[\"\'I’ll never get better\'\",\"\'I am worthy of happiness\'\",\"\'I can handle this\'\",\"\'Everything will improve soon\'\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(18, 'What is an important step in recovering from depression?', '[\"Only medication\",\"Cognitive Behavioral Therapy (CBT) and self-care practices\",\"Avoiding social interactions\",\"Staying alone\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(19, 'What can help reduce the severity of depressive symptoms, according to recent research?', '[\"Anti-inflammatory therapies and lifestyle changes\",\"Ignoring the symptoms\",\"More stress\",\"Increased isolation\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(20, 'What is the key to overcoming the lies that depression tells you?', '[\"Accepting them as true\",\"Proper treatment and time\",\"Ignoring the treatment\",\"Not seeking help\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(21, 'What is an important aspect of supporting someone with depression or anxiety?', '[\"Offering advice immediately\",\"Listening and validating their feelings\",\"Ignoring their behavior\",\"Telling them to snap out of it\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(22, 'What should you do when someone shows attention-seeking behavior?', '[\"Ignore them\",\"Acknowledge their feelings and provide support\",\"Tell them to stop seeking attention\",\"Reprimand them for their behavior\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(23, 'What is reflective listening?', '[\"Listening without responding\",\"Repeating exactly what the speaker says\",\"Mirroring the speaker’s feelings or thoughts to ensure understanding\",\"Giving solutions immediately\"]', 2, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(24, 'Why do families often resist change?', '[\"Because they don’t care\",\"Due to homeostasis and the need to maintain stability\",\"Because change is always bad\",\"Because they are not aware of the need to change\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(25, 'What is an important strategy when talking about suicidal thoughts?', '[\"Offering solutions immediately\",\"Approaching the conversation with care, compassion, and non-judgment\",\"Ignoring the issue\",\"Telling the person to move on\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(26, 'How should you address self-harm?', '[\"Ignore the person’s feelings\",\"Offer non-judgmental support and encourage professional care\",\"Punish them\",\"Tell them to stop immediately\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(27, 'What is an important resource to help a grieving friend?', '[\"Giving them space to grieve without support\",\"Providing counseling, support groups, and helpful books\",\"Telling them to move on\",\"Ignoring their grief\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(28, 'How should you talk to a teenager after a peer\'s death at school?', '[\"Avoid discussing it\",\"Be patient, reassure them, and offer professional support if needed\",\"Tell them to get over it\",\"Ignore their emotions\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(29, 'What technique can help manage both anxiety and insomnia?', '[\"Deep breathing\",\"Drinking coffee before bed\",\"Watching TV\",\"Listening to loud music\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(30, 'What is sleep hygiene?', '[\"Using electronics in bed\",\"Habits and practices that promote quality sleep\",\"Sleeping at any time of the day\",\"Sleeping without a routine\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(31, 'What technique can help you fall asleep faster?', '[\"Progressive muscle relaxation\",\"Drinking caffeinated drinks\",\"Staying up late\",\"Watching stressful TV shows\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(32, 'What is Happy Place Meditation?', '[\"Visualization of a peaceful place\",\"Talking to a therapist\",\"Listening to loud music\",\"Watching action movies\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(33, 'What can significantly improve your sleep quality?', '[\"Finding the right sleep products\",\"Drinking too much caffeine\",\"Having an irregular sleep schedule\",\"Staying awake all night\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(34, 'What is a common cause of nightmares?', '[\"Stress and trauma\",\"Eating too much fruit\",\"Exercising late at night\",\"Drinking water before bed\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(35, 'What can help manage insomnia, according to sleep expert Martin Reed?', '[\"Cognitive behavioral therapy for insomnia (CBT-I)\",\"Watching TV before bed\",\"Skipping meals\",\"Working out late at night\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(36, 'What is a technique for calming the mind before bed to combat insomnia?', '[\"Deep breathing\",\"Reading stressful news\",\"Checking social media\",\"Staying active\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(37, 'What is a common symptom of insomnia?', '[\"Difficulty falling asleep\",\"Frequent naps during the day\",\"More energy at night\",\"Increased appetite\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(38, 'How can setting a regular sleep schedule help with insomnia?', '[\"It signals to your brain when it’s time to sleep\",\"It increases anxiety\",\"It leads to more distractions\",\"It disrupts your natural circadian rhythm\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(39, 'What is one technique to reduce the intensity of panic attacks?', '[\"Breathing exercises\",\"Avoiding all social interaction\",\"Ignoring the symptoms\",\"Consuming large amounts of caffeine\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(40, 'What should you do if you experience the onset of a panic attack?', '[\"Take slow, deep breaths\",\"Run away from the situation\",\"Think about your worries\",\"Talk to someone immediately\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(41, 'How can grounding exercises help during a panic attack?', '[\"They help refocus attention on the present moment\",\"They make you feel more anxious\",\"They distract from physical symptoms\",\"They prevent you from thinking about your fears\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(42, 'What is the difference between panic attacks and anxiety attacks?', '[\"Panic attacks are sudden episodes of intense fear, anxiety attacks are chronic\",\"Anxiety attacks are sudden, panic attacks are chronic\",\"Panic attacks involve physical symptoms, anxiety attacks don’t\",\"Anxiety attacks are caused by stress, panic attacks aren’t\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(43, 'What triggers the panic attack cycle?', '[\"Physical sensations of anxiety leading to fear and avoidance\",\"Stress from work\",\"Eating certain foods\",\"Being in crowded places\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(44, 'What is one method for managing and preventing panic attacks?', '[\"Gradual exposure to feared situations\",\"Ignoring the feelings\",\"Taking medications immediately\",\"Avoiding all social interactions\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(45, 'What does the Anti-Struggle Technique involve?', '[\"Accepting the panic attack without resistance\",\"Fighting the symptoms immediately\",\"Avoiding the source of panic\",\"Talking to someone else\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(46, 'How does the Calm-Down Method help during an anxiety attack?', '[\"By focusing on deep, controlled breathing\",\"By avoiding all thought\",\"By panicking more\",\"By ignoring the symptoms\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(47, 'What helped the person in the story overcome panic disorder after 30 years?', '[\"Therapeutic techniques, lifestyle changes, and understanding triggers\",\"Avoiding social situations\",\"Taking medications only\",\"Resting for long periods\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(48, 'What does Drew Linslata recommend for overcoming panic attacks and agoraphobia?', '[\"Exposure therapy, mindfulness, and cognitive restructuring\",\"Avoidance of all fears\",\"Self-medicating\",\"Ignoring triggers\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(49, 'What is the misconception about OCD that Anne Swanson addresses in her TEDx talk?', '[\"OCD is just about quirky habits\",\"OCD is a serious mental health issue\",\"OCD is easy to overcome\",\"OCD only affects children\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(50, 'What is one of the common triggers for intrusive thoughts in OCD?', '[\"Uncertainty or doubt\",\"Clear instructions\",\"Positive reinforcement\",\"Ignoring negative thoughts\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(51, 'Can you be successful while managing a mental illness, according to the discussion about John Green\'s book?', '[\"No, mental illness makes success impossible\",\"Yes, it\'s possible to be successful while managing mental illness\",\"Success is only possible with medication\",\"Mental illness prevents creativity\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(52, 'What are intrusive thoughts?', '[\"Unwanted, distressing thoughts or images\",\"Thoughts that lead to happiness\",\"Thoughts that make you feel empowered\",\"Thoughts that are always positive\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(53, 'How can rumination affect mental health, according to Dr. Michael Greenberg?', '[\"It helps you solve problems\",\"It can exacerbate anxiety and depression\",\"It leads to better decision-making\",\"It has no effect on mental health\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(54, 'What are the six most common types of intrusive thoughts?', '[\"Violent, sexual, and blasphemous thoughts\",\"Thoughts about food\",\"Thoughts about money\",\"Thoughts about love\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(55, 'What is one thinking pattern that can worsen OCD and anxiety?', '[\"Magical thinking\",\"Positive thinking\",\"Relaxation techniques\",\"Hopeful thinking\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(56, 'What is trichotillomania?', '[\"A disorder where individuals pull out their hair\",\"A disorder related to overeating\",\"A disorder related to excessive thinking\",\"A disorder related to fear of germs\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(57, 'What is one treatment for trichotillomania and other BFRBs?', '[\"Habit Reversal Training (HRT)\",\"Ignoring the behavior\",\"Taking medication only\",\"Avoiding social situations\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(58, 'What is the purpose of the FAQ guide on OCD?', '[\"To answer common questions about OCD\",\"To make people with OCD feel guilty\",\"To diagnose OCD\",\"To ignore OCD\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(59, 'What is an important aspect of supporting someone with depression or anxiety?', '[\"Offering advice immediately\", \"Listening and validating their feelings\", \"Ignoring their behavior\", \"Telling them to snap out of it\"]', 1, '2025-05-05 18:30:19', '2025-05-05 18:30:19', 3),
(60, 'What should you do when someone shows attention-seeking behavior?', '[\"Ignore them\", \"Acknowledge their feelings and provide support\", \"Tell them to stop seeking attention\", \"Reprimand them for their behavior\"]', 1, '2025-05-05 18:31:50', '2025-05-05 18:31:50', 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `quiz`
--

CREATE TABLE `quiz` (
  `id` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `quiz`
--

INSERT INTO `quiz` (`id`, `courseId`, `duration`, `createdAt`, `updatedAt`) VALUES
(1, 1, 300, '2025-05-05 23:24:59', '2025-05-05 23:24:59'),
(2, 2, 300, '2025-05-05 23:24:59', '2025-05-05 23:24:59'),
(3, 3, 300, '2025-05-05 23:24:59', '2025-05-05 23:24:59'),
(4, 4, 300, '2025-05-05 23:24:59', '2025-05-05 23:24:59'),
(5, 5, 300, '2025-05-05 23:24:59', '2025-05-05 23:24:59'),
(6, 6, 300, '2025-05-05 23:24:59', '2025-05-05 23:24:59');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20250407160842-create-user.js'),
('20250407160847-create-course.js'),
('20250407160852-create-enrollment.js'),
('20250409184901-add-isVerified-to-users.js'),
('20250414193624-create-consultation.js'),
('20250418171019-create-psychologists.js'),
('20250418172527-create-consultations.js'),
('20250419023718-create-time-slot.js'),
('20250419023750-create-psychologist-time-slot.js'),
('20250420103458-add-time-slot-to-consultations.js'),
('20250421154835-create-materials.js'),
('20250421163002-create-question.js'),
('20250421163016-create-submission.js'),
('20250421165438-add-foreign-key-userId-to-submissions.js'),
('20250428181756-create-quiz.js'),
('20250428190131-add-quizId-to-questions.js'),
('20250428190651-update-submission-with-quizId.js'),
('add-user-fk-to-consultations.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `submissions`
--

CREATE TABLE `submissions` (
  `id` int(11) NOT NULL,
  `answers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`answers`)),
  `score` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) NOT NULL,
  `quizId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `submissions`
--

INSERT INTO `submissions` (`id`, `answers`, `score`, `createdAt`, `updatedAt`, `userId`, `quizId`) VALUES
(11, '[3,1,3,2,2,0,1,2,3,0]', 20, '2025-05-05 16:44:52', '2025-05-05 16:44:52', 35, 6);

-- --------------------------------------------------------

--
-- Struktur dari tabel `timeslots`
--

CREATE TABLE `timeslots` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `timeslots`
--

INSERT INTO `timeslots` (`id`, `code`, `start_time`, `end_time`, `category`, `createdAt`, `updatedAt`) VALUES
(1, 'M1', '08:00:00', '09:00:00', 'Morning', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(2, 'M2', '09:15:00', '10:15:00', 'Morning', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(3, 'M3', '10:30:00', '11:30:00', 'Morning', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(4, 'A1', '13:00:00', '14:00:00', 'Afternoon', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(5, 'A2', '14:15:00', '15:15:00', 'Afternoon', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(6, 'A3', '15:30:00', '16:30:00', 'Afternoon', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(7, 'A4', '16:45:00', '17:45:00', 'Afternoon', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(8, 'E1', '19:30:00', '20:30:00', 'Evening', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(9, 'E2', '20:45:00', '21:45:00', 'Evening', '2025-04-28 19:20:45', '2025-04-28 19:20:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isVerified` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`, `isVerified`) VALUES
(35, 'Alice Doe', 'alice@example.com', '$2b$10$1Rm2XA.8FJNTK2whyr3w3uuWFD5XyYOKIMteADx2bhbyNO2fuhyOK', NULL, '2025-04-28 19:20:45', '2025-04-28 19:20:45', 0),
(36, 'Bob Smith', 'bob@example.com', '$2b$10$1Rm2XA.8FJNTK2whyr3w3uuWFD5XyYOKIMteADx2bhbyNO2fuhyOK', NULL, '2025-04-28 19:20:45', '2025-04-28 19:20:45', 0),
(37, 'jonny', 'louis.sung29@gmail.com', '$2b$10$0HdfzMTjB5tODV32RjURI.NfAn5myMM5CIIMhvY1RUGXbJ0yi7o7q', 'student', '2025-04-29 05:26:34', '2025-04-29 05:27:24', 1),
(38, 'Jono', 'louis.sung24@gmail.com', '$2b$10$Qwo2M7n2vu2W/O4x3Ygqqu2Wr.m.FTOtj/fAYqX8.TS5ca0nYe6eC', 'student', '2025-05-05 17:04:46', '2025-05-05 17:05:23', 1),
(39, 'Umar', 'umaraco.10@gmail.com', '$2b$10$X4.BUaZhUtZtKUUAa67OhOhdC8WUBMkNo96a/hQSQpqoF5WxWm4g.', 'student', '2025-05-05 17:09:19', '2025-05-05 17:09:19', 0),
(40, 'Umar', 'louis22002@mail.unpad.ac.id', '$2b$10$IFNW5vOg.w79ZTv3fltDOeDurbNdPEmYi3TkgwOmZ2LuONMEKKKT2', 'student', '2025-05-05 17:19:08', '2025-05-05 17:19:40', 1),
(44, 'Umaar', 'umar22002@mail.unpad.ac.id', '$2b$10$dBbLnQ8sapHSLgTGMNmONuQ8LVQsUIJeNIJOnBSP6jVgrPxVSRIM6', 'student', '2025-05-05 17:30:21', '2025-05-05 17:30:21', 0);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `consultations`
--
ALTER TABLE `consultations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `psychologist_id` (`psychologist_id`),
  ADD KEY `Consultations_time_slot_id_foreign_idx` (`time_slot_id`),
  ADD KEY `fk_consultation_user_id` (`user_id`);

--
-- Indeks untuk tabel `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`material_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indeks untuk tabel `psychologists`
--
ALTER TABLE `psychologists`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `psychologisttimeslots`
--
ALTER TABLE `psychologisttimeslots`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Questions_quizId_foreign_idx` (`quizId`);

--
-- Indeks untuk tabel `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courseId` (`courseId`);

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `submissions`
--
ALTER TABLE `submissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Submissions_userId_foreign_idx` (`userId`),
  ADD KEY `Submissions_quizId_foreign_idx` (`quizId`);

--
-- Indeks untuk tabel `timeslots`
--
ALTER TABLE `timeslots`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `consultations`
--
ALTER TABLE `consultations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT untuk tabel `materials`
--
ALTER TABLE `materials`
  MODIFY `material_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT untuk tabel `psychologists`
--
ALTER TABLE `psychologists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=517;

--
-- AUTO_INCREMENT untuk tabel `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `submissions`
--
ALTER TABLE `submissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `consultations`
--
ALTER TABLE `consultations`
  ADD CONSTRAINT `Consultations_time_slot_id_foreign_idx` FOREIGN KEY (`time_slot_id`) REFERENCES `timeslots` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `consultations_ibfk_1` FOREIGN KEY (`psychologist_id`) REFERENCES `psychologists` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_consultation_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `materials`
--
ALTER TABLE `materials`
  ADD CONSTRAINT `materials_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `Questions_quizId_foreign_idx` FOREIGN KEY (`quizId`) REFERENCES `quiz` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `quiz`
--
ALTER TABLE `quiz`
  ADD CONSTRAINT `quiz_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `submissions`
--
ALTER TABLE `submissions`
  ADD CONSTRAINT `Submissions_quizId_foreign_idx` FOREIGN KEY (`quizId`) REFERENCES `quiz` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Submissions_userId_foreign_idx` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
